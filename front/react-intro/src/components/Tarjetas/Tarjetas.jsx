import styles from './TarjetasStyle.module.css'; //!asi se incorpora!
const Tarjetas = () => {
    return (
        <>
        <div>
             <div className={styles.cards}>
                <div className={`${styles.card} ${styles.money}`}>
                    <img src="https://vectorflags.s3.amazonaws.com/flags/org-eu-sphere-01.png" alt="euro" />
                    <p className={styles.tip}>Euro</p>
                    <p className={`${styles.secondText}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quidem cupiditate unde aperiam. Vel numquam praesentium necessitatibus possimus facere ut quibusdam beatae vitae sed! Exercitationem vitae a impedit dolorem! Voluptatum?</p>
                </div>
                <div className={`${styles.card} ${styles.money}`}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" alt="btc" />
                    <p className={styles.tip}>Bitcoin</p>
                    <p className={`${styles.secondText}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, fugiat sequi assumenda facilis voluptatem et. Provident est temporibus maxime eos aliquid molestias laborum ab doloremque reiciendis sint, consequatur facere quod?</p>
                </div>
                <div className={`${styles.card} ${styles.money}`}>
                    <img src="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/ZJZZK5B2ZNF25LYQHMUTBTOMLU.png" alt="eth" />
                    <p className={styles.tip}>Etherum</p>
                    <p className={`${styles.secondText}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sunt iste, aperiam voluptatibus qui repudiandae accusamus voluptatem tenetur impedit, minima suscipit id cumque rerum doloremque totam. Dolore blanditiis laudantium aperiam!</p>
                </div>
            </div>
        </div>
           
            </>
        );
    }

    export default Tarjetas;