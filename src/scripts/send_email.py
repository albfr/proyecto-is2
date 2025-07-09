import requests
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

FROM_ADDRESS = None
FROM_PASSWORD = None

def send_email():
    with smtplib.SMTP("smtp.gmail.com", 587) as email_server:
        email_server.starttls()
        email_server.login(FROM_ADDRESS, FROM_PASSWORD)

        users = requests.get("http://localhost:3000/api/getNotifiedUsers")

        for user in users.json():
            msg = MIMEMultipart()

            email = user["email"]
            city = user["city_for_nots"]

            msg["Subject"] = f"Recomendaciones para {city}"
            msg["From"] = FROM_ADDRESS
            msg["To"] = email

            msg.attach(MIMEText(f"¡Hola {email}!\n\nEstas son tus recomendaciones de los próximos tres días en {city}.\n\n"))

            recommendations = requests.get(f"http://localhost:3000/api/recommendations?email={email}&city={city}")

            for day in recommendations.json():
                date = day["date"]
                recs = day["recommendations"]

                max_temp = day["maxtemp_c"]
                min_temp = day["mintemp_c"]
                temp = day["avgtemp_c"]

                wind = day["maxwind_kph"]

                hum = day["avghumidity"]
                uv = day["uv"]

                precip = day["totalprecip_mm"]

                msg.attach(MIMEText(f"El {date} se pronostica lo siguiente:\nLa temperatura estará entre {max_temp}°C y {min_temp}°C con una sensación promedio de {temp}°C.\nEl viento será de {wind} km/h y la humedad estará en un {hum}%\nSe esperan {precip} mm de precipitaciones y un índice UV de {uv}.\n\n"))

                rec = "De tus actividades preferidas, este es el grado de recomendación de cada una:\n"

                for r in recs:
                    name = r["name"]
                    sim = r["similarity"]

                    rec += f"{name}: {sim:.2f}\n"

                rec += "\n"

                msg.attach(MIMEText(rec))

            email_server.sendmail(FROM_ADDRESS, email, msg.as_string())
