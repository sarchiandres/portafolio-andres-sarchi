import { Cards } from '../../Layouts/Cards/Cards'
import { Education } from '../../Layouts/Education/Education'
import { Footer } from '../../Layouts/Footer/Footer'
import { ItemEducation } from '../../UI/ItemEducation/ItemEducation'  // Asegúrate de importar correctamente ItemEducation
import './Skills.css'

export const Skills = () => {
  return (
    <section>
        <Education estudy="Estudios">
            <ItemEducation cla="li" titleE="Basico primaria" age="2016-2020 Marcelino Champagnat" />
            <ItemEducation cla="li" titleE="Basico secundaria" age="2021-2022 Marcelino Champagnat" />
            <ItemEducation cla="li" titleE="Tecnico en programacion de software" age="2021-2022 Marcelino Champagnat" />
        </Education>

        <Cards />
        <Education  title_E='tittleEdu' estudy="nivel de ingles">
            <ItemEducation cla="inglish" titleE="A 2 " tittleH='tittleinglesh' />
        </Education>

        <Education box_education='box-ed' title_E='tittleEdu' estudy="Habilidades sociales">
            <ItemEducation cla="li" titleE="Trabajo en equipo: Capacidad para colaborar de manera efectiva con otros en proyectos, compartir ideas y solucionar problemas de manera conjunta." tittleH='skillSocials' />
            <ItemEducation cla="li" titleE="Comunicación: La habilidad para expresar ideas claramente, tanto de forma verbal como escrita, es crucial, especialmente cuando trabajas en equipo o con clientes." tittleH='skillSocials' />
            <ItemEducation cla="li" titleE="Adaptabilidad: Capacidad para ajustarte a nuevos entornos o cambios, como en la adopción de nuevas tecnologías o en la dinámica de equipos." tittleH='skillSocials' />
            <ItemEducation cla="li" titleE="" tittleH='skillSocials' />
        </Education>
        <Footer fotter='fooS' contactcontainer1='contact-container2'/>
    </section>
  )
}
