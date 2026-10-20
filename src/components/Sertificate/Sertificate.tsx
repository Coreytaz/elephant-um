import styles from "./Sertificate.module.scss";
import SertificateImg from "../../assets/sertificate.jpg";
import P from "../P/P";

export default function Sertificate() {
  return (
    <section className={styles.sertificate} aria-labelledby="certificate-title">
      <div className={styles.sertificate__info}>
        <h2 id="certificate-title">Выдаём <span>дипломы</span> участникам</h2>
        <P size="px18">Жюри конкурса рассмотрит работы и выделит победителей по городам и возрастным категориям, а также определит другие номинации, подчеркнув уникальную особенность каждого конкретного рисунка — дипломы получат все дети!</P>
        <P size="px18">Скачать диплом можно будет в личном кабинете через сутки после окончания конкурса, дополнительно вышлем его на e-mail.</P>
        <P size="px18">Со слоном к победам напролом!</P>
      </div>
      <img src={SertificateImg} alt="Образец диплома участника конкурса" width="842" height="595" loading="lazy" decoding="async" />
    </section>
  );
}
