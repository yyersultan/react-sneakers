import './Category.css'

export const Category = ():JSX.Element => {
    
    return (
    <div className="blocks">
        <div className="block_item" 
        style={{backgroundImage: "url('https://ae01.alicdn.com/kf/H0143e29258534c438ee13c6609fcec330/Women-Chunky-Sneakers-Vulcanize-Shoes-Korean-Fashion-New-Female-Black-White-Platform-Thick-Sole-Running-Casual.jpg_Q90.jpg_.webp') "}}>
            <div>
                sneakers 9900tg
            </div>
        </div>
        <div className="block_item" 
        style= {{backgroundImage: "url('https://media.gq.com/photos/5d93aa2c636d4800084025ae/16:9/pass/sneakers.jpg')" }}>
            <div>
                Top models
            </div>
        </div>
        <div className="block_item" 
        style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xfkiwBtTS-aDYSIdpp17FLDLm5qwu-O6gQ&usqp=CAU') "}}>
            
            <div>
                Basket sneakers
            </div>
        </div>
    </div>
    )
}