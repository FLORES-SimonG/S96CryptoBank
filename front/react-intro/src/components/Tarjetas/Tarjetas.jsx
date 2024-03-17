import styles from "./TarjetasStyle.module.css"; //!asi se incorpora!
const Tarjetas = () => {
  return (
    <>
    <h2>Cryptocurrencies Available for Buying/Selling</h2>
      <div>
        <div className={styles.cards}>
          <div className={`${styles.card} ${styles.money}`}>
            <img
              src="https://vectorflags.s3.amazonaws.com/flags/org-eu-sphere-01.png"
              alt="euro"
            />
            <p className={styles.tip}>Euro</p>
            <p className={`${styles.secondText}`}>
            The euro is the official currency of the eurozone, consisting of 19 out of the 27 European Union countries. It was introduced in 1999 as an electronic currency and later in the form of banknotes and coins in 2002. The euro is managed by the European Central Bank (ECB) and is the second most important reserve currency in the world after the US dollar. Its ISO 4217 code is EUR. The euro is used daily for commercial transactions, travel, and as a store of value in eurozone countries, and its value fluctuates in international currency markets based on economic, political, and financial factors.
            </p>
          </div>
          <div className={`${styles.card} ${styles.money}`}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
              alt="btc"
            />
            <p className={styles.tip}>Bitcoin</p>
            <p className={`${styles.secondText}`}>
            Bitcoin is a decentralized cryptocurrency created in 2009 by an individual or group under the pseudonym Satoshi Nakamoto. It operates on a peer-to-peer network without control from central authorities. Transactions are recorded on a public ledger called the blockchain. Its total supply is limited to 21 million units, making it a deflationary asset. It is acquired through online exchanges or mining, where computers solve mathematical problems to validate transactions. It is popular as an investment and medium of exchange, although its volatility and long-term utility are topics of debate.
            </p>
          </div>
          <div className={`${styles.card} ${styles.money}`}>
            <img
              src="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/ZJZZK5B2ZNF25LYQHMUTBTOMLU.png"
              alt="eth"
            />
            <p className={styles.tip}>Etherum</p>
            <p className={`${styles.secondText}`}>
            Ethereum is a blockchain platform that enables the creation and execution of smart contracts and decentralized applications (DApps). Ether (ETH) is its native cryptocurrency. Smart contracts are programs that execute automatically when certain conditions are met. Ethereum is pivotal in the development of decentralized applications and decentralized finance (DeFi).
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tarjetas;
