import React from 'react'
import "./catalog.css"
import { Link } from 'react-router-dom'
const Catalog = () => {

  const blocksData = [
    {
      title: 'Лекция',
      link: "/razdel/lesson",
      image: 'https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5758186fbd8_ABM%20college%20mobile%20app%20dev%20main.jpg',
    },
    {
      title: 'Тест',
      link: "/razdel/test",
      image: 'https://media.designrush.com/articles/101246/conversions/app-development-process-details.jpg',
    },
    {
      title: 'Практика',
      link: "/razdel/praktika",
      image: 'https://www.appmysite.com/blog/wp-content/uploads/2022/07/Mobile-app-development-market-share.png',
    },
    {
      title: 'Аралық бақылау',
      link: "/razdel/rk",
      image: 'https://www.vaival.com/wp-content/uploads/2021/01/vaival-application.png',
    },
    {
      title: 'Емтихан тақырыпқа байланысты сұрақтар',
      link: "/razdel/mainTest",
      image: 'https://www.businessofapps.com/wp-content/uploads/2020/08/zymr8_steps_the_mobile_app_dev_lifecycle_cover.jpg',
    },
  ];

  return (
    <div className='catalog'>
      {blocksData.map((block, index) => (
        <div className="block" key={index}>
          <img src={block.image} alt={block.title} className="block-image" />
          <div className="block-title"><h4><Link style={{color: "inherit"}} to={block.link}>{block.title}</Link></h4></div>
        </div>
      ))}
    </div>
  )
}

export default Catalog