import '../../css/InfoCard.css';

export function InfoCard ({ title, description, iconClass }) {
  return (
    <>
      <div className='info-card'>
        <main>
          <i className={iconClass} />
          {title}
        </main>
        <h5>
          {description}
        </h5>
      </div>
    </>
  );
}
