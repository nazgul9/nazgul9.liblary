import React, { useState } from 'react';
import Navbar from '../components/Navbar'

const initialState = [
    {
        id: 1,
        title: "Syngan kylych",
        price: 500,
        content: "1865-жыл. Алымкул аталык баштаган Кокон аскери Ташкен алдында генерал Черняевдин колу менен беттешет. Орус армиясын эки жактан толгоп кол саларда кокондуктардын Алымкул аталыгы киши колдуу болот. Тагыраагы, ал жалгыз көздүү удайчысынын артынан аткан огунан өлүп, уруш токтойт.",
        img: "https://kitapp.as.kg/wp-content/uploads/2020/11/106779776_141015994308626_1798602639614172740_o-e1605243649583.jpg"
    },
    {
        id: 2,
        title: "Кел кел",
        price: 500,
        content: "Сынган Кылыч Кыргыз Эл жазуучусу Тологон Касымбеков Кел-Кел романы 2 том - 900 сом  Жетилген Курак повести - 300 Сом   доставка: в пределах центра города бесплатно",
        img: "https://img5.lalafo.com/i/posters/original/5c/98/85/syngan-kylych-2-tom-800-s-zhetilgen-kurak-300s-81487558_image-1.jpeg"
    },
    {
        id: 3,
        title: "Асель",
        price: 250,
        content: "АСЕЛЬ - Адашуудан акыйкатка...Бүгүн сизге Жуман Кеңештин Асель аттуу жаштарга жакшы кеңешчи боло алчу китебин сунуш кылабыз.",
        img: "data:image/jpeg;base64,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"
    },
    {
        id: 4,
        title: "карыптар",
        price: 200,
        content: "Дүйнөлүк адабиятта өзгөчө орду бар Карыптар романы Виктор Гюгонун калемине таандык тарыхый чыгарма. XIX кылымдын чоң романдарынын бири болуп эсептелген Карыптар чыгармасында француз коомчулугунда орун алган окуялар баяндалат. Ачка отурган үй-бүлөсү үчүн нан уурдап беш жылга эң оор жумушка соттолгон, кийин жамандыкка жакшылык менен жооп берген жоомарт, боорукер кишиге айланган Жан Валжандын жашоосу жана анын замандаштарынын кылык-жоруктары, адамгерчилик сапаттары чагылдырылган.",
        img: "https://bookhouse.kg/media/galleryphoto/2021/2/e8a4b57f-72c6-4775-baa7-eba6bb45f28b.jpg.600x780_q94.jpg"
    },
]


const App = () => {
    const [books, setBooks] = useState(initialState)
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <div className="container border shadow-sm rounded pb-4">
                    <h1>Books</h1>
                    <div className="row">

                    {books.map((item) => (
                        <div className="col-3">                        
                                <div className="card books-item">
                                    <img className="card-img-top" src={item.img} alt="" />
                                    <div className="card-body">
                                        <h2 className="card-title">{item.title}</h2>
                                        <p className="card-text">Price:{item.price}</p>
                                    </div>
                                </div>
                         </div>
                            ))}

                    </div>
                </div>
            </main>

        </div>
    );
};

export default App;