import style from './CreditCard.module.css';
import { TbPigMoney } from "react-icons/tb";
import { useSelector } from "react-redux";

const CreditCard = () => {
    const activeUserName = useSelector(
        (state) => state.actualUser.userData.user.name
      );
    return(
        <div className={style.perro}>

        <div className={style['visa-card']}>
            <div className={style.logoContainer}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="23"
                    height="23"
                    viewBox="0 0 48 48"
                    className={style.svgLogo}
                    >
                    <path
                        fill="#ff9800"
                        d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                        ></path>
                    <path
                        fill="#d50000"
                        d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                        ></path>
                    <path
                        fill="#ff3d00"
                        d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                        ></path>
                </svg>
                
                        <p> <TbPigMoney/>  S96 Bank</p>
            </div>
            <div className={style['number-container']}>
                <label className={style['input-label']} htmlFor="cardNumber">CARD NUMBER</label>
                <input
                    className={style.inputstyle}
                    id="cardNumber"
                    placeholder="XXXX XXXX XXXX XXXX"
                    name="cardNumber"
                    type="text"
                />
            </div>

            <div className={style['name-date-cvv-container']}>
                <div className={style['name-wrapper']}>
                    <label className={style['input-label']} htmlFor="holderName">CARD HOLDER</label>
                    <input
                        className={style.inputstyle}
                        id="holderName"
                        placeholder={activeUserName}
                        type="text"
                    />
                </div>

                <div className={style['expiry-wrapper']}>
                    <label className={style['input-label']} htmlFor="expiry">VALID THRU</label>
                    <input className={style.inputstyle} id="expiry" placeholder="MM/YY" type="text" />
                </div>
                <div className={style['cvv-wrapper']}>
                    <label className={style['input-label']} htmlFor="cvv">CVV</label>
                    <input
                        className={style.inputstyle}
                        placeholder="***"
                        maxLength="3"
                        id="cvv"
                        type="password"
                    />
                </div>
            </div>
        </div>
        </div>
    );
};

export default CreditCard;