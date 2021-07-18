import React, {useEffect} from 'react'
import './main.scss'
import 'bootstrap/scss/bootstrap.scss'
import Footer from  "./footer"
let tabs = React.createRef();

function Main() {
   let tabs = []
   let texts = []
   let pics = []

useEffect(() => {
    tabs.forEach((element) => {
        let p = element.innerText
     element.innerText = [p.slice(0, 132), '\n', p.slice(132)].join('');  
    })
    

    texts.forEach((element) => {
        let p = element.innerText
        element.innerText = [p.slice(0, 323), '\n', p.slice(323)].join('');
        
})

    pics.forEach((element, index) => {
        if (index % 2 == 0) {
            element.classList.add('koshe__img_sag')
            element.closest('.koshe').classList.add('koshe_sag')
        }
    console.log(element);
})
    
    
}, [])
    return (<>
  


        <div className="main container__sp">
            <h1 className='main__header'>Ən Son Xəbərlər</h1>


  







            <div className="mainItem">
                <img className="mainItem__picture" src="https://mk0plandiscclonj4eof.kinstacdn.com/wp-content/uploads/2019/09/HR-plan.png" alt="" />
                <div className='mainItem__texts'>
                    <p className='mainItem__date'>17 May, 2020</p>
                    <h2 className='mainItem__header'>Ali Təhsil Müəssisələrinə Sənəd Qəbulu Başlayıb.</h2>
                    <div className='position__relative'>
                    <span onClick={(e) => {
                            e.currentTarget.closest('.position__relative').querySelector('.mainItem__text').classList.add('mainItem__text_scroll')
                            e.currentTarget.classList.add('d-none')
                    }} className='mainItem__load'>davamını oxu</span> 
                    <p  ref={(tab) => { tabs.push(tab) }} className='mainItem__text'> Lorem ipsum dolor, sit amet consectetur  adipisicing elit. Alias soluta consequuntur veniam ab consectetur accusantium quam, eum sint  nam amet numquam ipsum reiciendis et  impedit, quasi repudiandae excepturi sapiente nemo.
                        Sed minima enim inventore 
                            delectus atque? Totam minus quasi non Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laudantium dolor, nam consectetur laborum in quo atque aperiam recusandae voluptates omnis eaque fuga quaerat officia autem aut quam repellendus praesentium?
                            Incidunt ducimus voluptates laboriosam, obcaecati ea accusamus quam nam eligendi suscipit dolor repellat nulla hic pariatur amet asperiores magni enim sapiente saepe voluptatum aperiam numquam? Ut fuga corrupti quo commodi.
                            Fugiat, vel. Deserunt enim similique neque, facilis sapiente ipsum nam fugiat aliquam illo nisi commodi placeat. Earum facilis sit, facere exercitationem voluptatem eum dolores, suscipit ex fugiat vel nisi numquam.  magnam quod. Eos quas, minima aut nihil non mollitia explicabo sit error voluptatum harum. Qui optio at explicabo cum nihil. </p>
                            </div>
                </div>
            </div>



            <div className="mainItem">
                <img className="mainItem__picture" src="https://mk0plandiscclonj4eof.kinstacdn.com/wp-content/uploads/2019/09/HR-plan.png" alt="" />
                <div className='mainItem__texts'>
                    <p className='mainItem__date'>17 May, 2020</p>
                    <h2 className='mainItem__header'>Ali Təhsil Müəssisələrinə Sənəd Qəbulu Başlayıb.</h2>
                    <div className='position__relative'>
                    <span onClick={(e) => {
                            e.currentTarget.closest('.position__relative').querySelector('.mainItem__text').classList.add('mainItem__text_scroll')
                            e.currentTarget.classList.add('d-none')
                    }} className='mainItem__load'>davamını oxu</span> 
                    <p  ref={(tab) => { tabs.push(tab) }}  className='mainItem__text'> Lorem ipsum dolor, sit amet consectetur  adipisicing elit. Alias soluta consequuntur veniam ab consectetur accusantium quam, eum sint  nam amet numquam ipsum reiciendis et  impedit, quasi repudiandae excepturi sapiente nemo.
                        Sed minima enim inventore 
                            delectus atque? Totam minus quasi non Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laudantium dolor, nam consectetur laborum in quo atque aperiam recusandae voluptates omnis eaque fuga quaerat officia autem aut quam repellendus praesentium?
                            Incidunt ducimus voluptates laboriosam, obcaecati ea accusamus quam nam eligendi suscipit dolor repellat nulla hic pariatur amet asperiores magni enim sapiente saepe voluptatum aperiam numquam? Ut fuga corrupti quo commodi.
                            Fugiat, vel. Deserunt enim similique neque, facilis sapiente ipsum nam fugiat aliquam illo nisi commodi placeat. Earum facilis sit, facere exercitationem voluptatem eum dolores, suscipit ex fugiat vel nisi numquam.  magnam quod. Eos quas, minima aut nihil non mollitia explicabo sit error voluptatum harum. Qui optio at explicabo cum nihil. </p>
                            </div>
                </div>
            </div>


            <div className="mainItem">
                <img   className="mainItem__picture" src="https://mk0plandiscclonj4eof.kinstacdn.com/wp-content/uploads/2019/09/HR-plan.png" alt="" />
                <div className='mainItem__texts'>
                    <p className='mainItem__date'>17 May, 2020</p>
                    <h2 className='mainItem__header'>Ali Təhsil Müəssisələrinə Sənəd Qəbulu Başlayıb.</h2>
                    <div className='position__relative'>
                    <span onClick={(e) => {
                            e.currentTarget.closest('.position__relative').querySelector('.mainItem__text').classList.add('mainItem__text_scroll')
                            e.currentTarget.classList.add('d-none')
                    }} className='mainItem__load'>davamını oxu</span> 
                    <p  ref={(tab) => { tabs.push(tab) }}  className='mainItem__text'> Lorem ipsum dolor, sit amet consectetur  adipisicing elit. Alias soluta consequuntur veniam ab consectetur accusantium quam, eum sint  nam amet numquam ipsum reiciendis et  impedit, quasi repudiandae excepturi sapiente nemo.
                        Sed minima enim inventore 
                            delectus atque? Totam minus quasi non Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laudantium dolor, nam consectetur laborum in quo atque aperiam recusandae voluptates omnis eaque fuga quaerat officia autem aut quam repellendus praesentium?
                            Incidunt ducimus voluptates laboriosam, obcaecati ea accusamus quam nam eligendi suscipit dolor repellat nulla hic pariatur amet asperiores magni enim sapiente saepe voluptatum aperiam numquam? Ut fuga corrupti quo commodi.
                            Fugiat, vel. Deserunt enim similique neque, facilis sapiente ipsum nam fugiat aliquam illo nisi commodi placeat. Earum facilis sit, facere exercitationem voluptatem eum dolores, suscipit ex fugiat vel nisi numquam.  magnam quod. Eos quas, minima aut nihil non mollitia explicabo sit error voluptatum harum. Qui optio at explicabo cum nihil. </p>
                            </div>
                </div>
            </div>
      




            
        </div>
        <div className='container__sp mt-3 mb-5'>
            <a className="hamisina" href="#">Hamısına Bax</a>
        </div>


        
        <div className="main2Wrapper ">
            <br /><br />
            <div className=" container__sp">
            <div className="main2 ">
            <h1 className='main__header align-self-start'>Yeni Köşə Yazıları</h1>
                <div className="koshe">
                    <img  ref={(pic) => { pics.push(pic) }}  className='koshe__img' src="https://i.hurimg.com/i/hdn/75/0x0/5f893b0467b0a906d45c6f52.jpg" alt="koshe yazisi" />
                    <div className="koshe__yazilar">
                    <p className='mainItem__date'>17 May, 2020</p>
                        <h2 className='mainItem__header'>Data Analtikasının Satışda Əhəmiyyəti</h2>
                        <div className='position__relative'>
                    <span onClick={(e) => {
                            e.currentTarget.closest('.position__relative').querySelector('.koshe__text').classList.add('koshe__text_scroll')
                            e.currentTarget.classList.add('d-none')
                    }} className='mainItem__load'>davamını oxu</span> 
                    <p  ref={(text) => { texts.push(text) }}  className='koshe__text'> Lorem ipsum dolor, sit amet consectetur  adipisicing elit. Alias soluta consequuntur veniam ab consectetur accusantium quam, eum sint  nam amet numquam ipsum reiciendis et  impedit, quasi repudiandae excepturi sapiente nemo.
                        Sed minima enim inventore 
                            delectus atque? Totam minus quasi non Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laudantium dolor, nam consectetur laborum in quo atque aperiam recusandae voluptates omnis eaque fuga quaerat officia autem aut quam repellendus praesentium?
                            Incidunt ducimus voluptates laboriosam, obcaecati ea accusamus quam nam eligendi suscipit dolor repellat nulla hic pariatur amet asperiores magni enim sapiente saepe voluptatum aperiam numquam? Ut fuga corrupti quo commodi.
                            Fugiat, vel. Deserunt enim similique neque, facilis sapiente ipsum nam fugiat aliquam illo nisi commodi placeat. Earum facilis sit, facere exercitationem voluptatem eum dolores, suscipit ex fugiat vel nisi numquam.  magnam quod. Eos quas, minima aut nihil non mollitia explicabo sit error voluptatum harum. Qui optio at explicabo cum nihil. </p>
                            </div>
                    </div>
                </div>
                



                <div className="koshe">
                    <img  ref={(pic) => { pics.push(pic) }}  className='koshe__img ' src="https://i.hurimg.com/i/hdn/75/0x0/5f893b0467b0a906d45c6f52.jpg" alt="koshe yazisi" />
                    <div className="koshe__yazilar">
                    <p className='mainItem__date'>17 May, 2020</p>
                        <h2 className='mainItem__header'>Data Analtikasının Satışda Əhəmiyyəti</h2>
                        <div className='position__relative'>
                        <span onClick={(e) => {
                            e.currentTarget.closest('.position__relative').querySelector('.koshe__text').classList.add('koshe__text_scroll')
                            e.currentTarget.classList.add('d-none')
                    }} className='mainItem__load'>davamını oxu</span> 
                    <p  ref={(text) => { texts.push(text) }}  className='koshe__text'> Lorem ipsum dolor, sit amet consectetur  adipisicing elit. Alias soluta consequuntur veniam ab consectetur accusantium quam, eum sint  nam amet numquam ipsum reiciendis et  impedit, quasi repudiandae excepturi sapiente nemo.
                        Sed minima enim inventore 
                            delectus atque? Totam minus quasi non Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laudantium dolor, nam consectetur laborum in quo atque aperiam recusandae voluptates omnis eaque fuga quaerat officia autem aut quam repellendus praesentium?
                            Incidunt ducimus voluptates laboriosam, obcaecati ea accusamus quam nam eligendi suscipit dolor repellat nulla hic pariatur amet asperiores magni enim sapiente saepe voluptatum aperiam numquam? Ut fuga corrupti quo commodi.
                            Fugiat, vel. Deserunt enim similique neque, facilis sapiente ipsum nam fugiat aliquam illo nisi commodi placeat. Earum facilis sit, facere exercitationem voluptatem eum dolores, suscipit ex fugiat vel nisi numquam.  magnam quod. Eos quas, minima aut nihil non mollitia explicabo sit error voluptatum harum. Qui optio at explicabo cum nihil. </p>
                            </div>
                    </div>
                </div>
                






                <div className="koshe">
                    <img ref={(pic) => { pics.push(pic) }} className='koshe__img' src="https://i.hurimg.com/i/hdn/75/0x0/5f893b0467b0a906d45c6f52.jpg" alt="koshe yazisi" />
                    <div className="koshe__yazilar">
                    <p className='mainItem__date'>17 May, 2020</p>
                        <h2 className='mainItem__header'>Data Analtikasının Satışda Əhəmiyyəti</h2>
                        <div className='position__relative'>
                        <span onClick={(e) => {
                            e.currentTarget.closest('.position__relative').querySelector('.koshe__text').classList.add('koshe__text_scroll')
                            e.currentTarget.classList.add('d-none')
                    }} className='mainItem__load'>davamını oxu</span> 
                    <p  ref={(text) => { texts.push(text) }}  className='koshe__text'> Lorem ipsum dolor, sit amet consectetur  adipisicing elit. Alias soluta consequuntur veniam ab consectetur accusantium quam, eum sint  nam amet numquam ipsum reiciendis et  impedit, quasi repudiandae excepturi sapiente nemo.
                        Sed minima enim inventore 
                            delectus atque? Totam minus quasi non Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laudantium dolor, nam consectetur laborum in quo atque aperiam recusandae voluptates omnis eaque fuga quaerat officia autem aut quam repellendus praesentium?
                            Incidunt ducimus voluptates laboriosam, obcaecati ea accusamus quam nam eligendi suscipit dolor repellat nulla hic pariatur amet asperiores magni enim sapiente saepe voluptatum aperiam numquam? Ut fuga corrupti quo commodi.
                            Fugiat, vel. Deserunt enim similique neque, facilis sapiente ipsum nam fugiat aliquam illo nisi commodi placeat. Earum facilis sit, facere exercitationem voluptatem eum dolores, suscipit ex fugiat vel nisi numquam.  magnam quod. Eos quas, minima aut nihil non mollitia explicabo sit error voluptatum harum. Qui optio at explicabo cum nihil. </p>
                            </div>
                    </div>
</div>









                </div>
                <div className=' mt-4 '>
            <a className="hamisina" href="#">Hamısına Bax</a>
        </div>
<br /><br />
</div>
        </div>

        <div className="container__sp mt-4 mb-4">
        <h1 className='main__header align-self-start'>Baş Tutacaq Tədbirlər</h1>
            <div className="row">
                <div className="col-12 col-lg-4 col-md-6  mb-5">
                    <div className='tedbirler'>

                        <div className="tedbirler__tarix">
                            <p className='tedbirler__ay mb-0'>MAY</p>
                            <p className='tedbirler__gun'>31</p>
                        </div>

                        <div className="tedbirler__tedbirler">
                            <p className="tedbirler__main">
                            “Peşəkar Uğurun Əsasları” adlı
onlayn təlim
                            </p>

                            <p className="tedpirler__date">
                            31 May 2020, saat 17:00
                            </p>
                        </div>
                    </div>
                </div>





                <div className="col-12 col-lg-4 col-md-6  mb-5 d-flex ">
                    <div className='tedbirler'>

                        <div className="tedbirler__tarix">
                            <p className='tedbirler__ay mb-0'>MAY</p>
                            <p className='tedbirler__gun'>31</p>
                        </div>

                        <div className="tedbirler__tedbirler">
                            <p className="tedbirler__main">
                            Türkiyənin Liderlik üzrə ən 
Tanınmış Eksperti Sinan Ergin 
tərəfindən MasterClass
                            </p>

                            <p className="tedpirler__date">
                            31 May 2020, saat 17:00
                            </p>
                        </div>
                    </div>
                </div>








                <div className="col-12 col-lg-4 col-md-6  mb-5">
                    <div className='tedbirler'>

                        <div className="tedbirler__tarix">
                            <p className='tedbirler__ay mb-0'>MAY</p>
                            <p className='tedbirler__gun'>31</p>
                        </div>

                        <div className="tedbirler__tedbirler">
                            <p className="tedbirler__main">
                            “Peşəkar Uğurun Əsasları” adlı
onlayn təlim
                            </p>

                            <p className="tedpirler__date">
                            31 May 2020, saat 17:00
                            </p>
                        </div>
                    </div>
                </div>



                <div className="col-12 col-lg-4 col-md-6  mb-5">
                    <div className='tedbirler'>

                        <div className="tedbirler__tarix">
                            <p className='tedbirler__ay mb-0'>MAY</p>
                            <p className='tedbirler__gun'>31</p>
                        </div>

                        <div className="tedbirler__tedbirler">
                            <p className="tedbirler__main">
                            “Peşəkar Uğurun Əsasları” adlı
onlayn təlim
                            </p>

                            <p className="tedpirler__date">
                            31 May 2020, saat 17:00
                            </p>
                        </div>
                    </div>
                </div>





                <div className="col-12 col-lg-4 col-md-6  mb-5 d-flex ">
                    <div className='tedbirler'>

                        <div className="tedbirler__tarix">
                            <p className='tedbirler__ay mb-0'>MAY</p>
                            <p className='tedbirler__gun'>31</p>
                        </div>

                        <div className="tedbirler__tedbirler">
                            <p className="tedbirler__main">
                            Türkiyənin Liderlik üzrə ən 
Tanınmış Eksperti Sinan Ergin 
tərəfindən MasterClass
                            </p>

                            <p className="tedpirler__date">
                            31 May 2020, saat 17:00
                            </p>
                        </div>
                    </div>
                </div>




                <div className="col-12 col-lg-4 col-md-6  mb-5 d-flex ">
                    <div className='tedbirler'>

                        <div className="tedbirler__tarix">
                            <p className='tedbirler__ay mb-0'>MAY</p>
                            <p className='tedbirler__gun'>31</p>
                        </div>

                        <div className="tedbirler__tedbirler">
                            <p className="tedbirler__main">
                            Türkiyənin Liderlik üzrə ən 
Tanınmış Eksperti Sinan Ergin 
tərəfindən MasterClass
                            </p>

                            <p className="tedpirler__date">
                            31 May 2020, saat 17:00
                            </p>
                        </div>
                    </div>
                </div>



            </div>
            <div className=' mt-4 '>
            <a className="hamisina" href="#">Hamısına Bax</a>
        </div>
        </div>
        


    <Footer/>
        </>
    )
}

export default Main
