import style from "./Skills.module.css";

function Skills(){

    return (
        <div className={style.container} >
            <div className={style.skills} >
                <h1><b>SKILLS</b></h1>
            </div>
            
            <div className={style.iconcontainer} >
                <div className={style.iconBox} >
                    <div>
                        <img src="https://img.icons8.com/plasticine/512/react.png" alt="" />
                    </div>
                    <div >
                        <img src="https://img.icons8.com/color/512/redux.png" alt="" />
                    </div>
                    <div>
                        <img src="https://img.icons8.com/color/512/html-5.png" alt="" />
                    </div>
                    <div>
                        <img src="https://img.icons8.com/color/512/css3.png" alt="" />
                    </div>
                </div>
                <div className={style.iconBox2}>
                    <div>
                        <img src="https://img.icons8.com/color/512/javascript.png" alt="" />
                    </div>
                    <div>
                        <img src="https://img.icons8.com/color/512/chakra-ui.png" alt="" />
                    </div>
                    <div>
                        <img src="https://img.icons8.com/ios-glyphs/512/github.png" alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Skills;

