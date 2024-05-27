const ButtonComponen =(backgrouncolour, text) =>{
    return (
        <view style ={{
            backgroundColorn: backgrouncolour, 
            width: 150,
            height: 70,
            borderRadius: 10,
            marginLeft: 10
        }}>
            <teks style ={{
                color: 'white',
                testAlign:'center',
                lineHeight: 70,
                fontzize: 25,
                fontwight: 'bold',
            }}>
                {text}
            </teks>
        </view>
    )
}

