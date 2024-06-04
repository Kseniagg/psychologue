import BtnBookTarifs from "../btnBook_tarifs/BtnBookTarifs";

const Scelet = () => {

    const items = [
        {
            "nom": "Диагностика",
            "description": "Lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lore ipsum ipsum lorem ipsum ipsum lorem",
            "price": "Бесплатно"
        },
        {
            "nom": "Диагностика",
            "description": "Lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lore ipsum ipsum lorem ipsum ipsum lorem",
            "price": "Бесплатно"
        },
        {
            "nom": "Диагностика",
            "description": "Lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lore ipsum ipsum lorem ipsum ipsum lorem",
            "price": "Бесплатно"
        },
        {
            "nom": "Диагностика",
            "description": "Lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lore ipsum ipsum lorem ipsum ipsum lorem",
            "price": "Бесплатно"
        }
    ]

    return (
        <>
            <div className="tarifs_bloc" >
                {
                    items.map((item, n) => (
                        <div className="tarifs_item" key={n}>
                            <p className="tarifs_item_name"><strong>{item.nom}</strong></p>
                            <p>{item.description}
                            </p>
                            <div className="tarifs_item_book">
                                <p>40 мин <span>{item.price}</span></p>
                                <BtnBookTarifs />
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Scelet;