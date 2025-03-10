import { Cards } from '../../Layouts/Cards/Cards'
import { Education } from '../../Layouts/Education/Education'
import { ItemEducation } from '../../UI/ItemEducation/ItemEducation'  // Asegúrate de importar correctamente ItemEducation
import './Skills.css'

export const Skills = () => {
  return (
    <section>
        <Education estudy="Estudios">
            <ItemEducation cla="li" titleE="Basico primaria" age="2016-2020 Marcelino Champagnat" />
            <ItemEducation cla="li" titleE="Basico secundaria" age="2021-2022 Marcelino Champagnat" />
            <ItemEducation cla="li" titleE="Tecnico en programacion de software" age="2021-2022 Marcelino Champagnat" />
            <ItemEducation cla="li" titleE="Tecnico en programacion de software" age="2021-2022 Marcelino Champagnat" />
        </Education>
        <Cards />
        <Education  title_E='tittleEdu' estudy="nivel de ingles">
            <ItemEducation cla="inglish" titleE="A 1 " tittleH='tittleinglesh' />
        </Education>
    </section>
  )
}
