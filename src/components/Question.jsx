import '../css/Question.css';

export function Question ({ question, options }) {
  return (
    <>
      <div className='question'>
        <section>
          <p>
            {question}
          </p>
          <ul>
            {/* usando destructuración de arrays */}
            {Object.entries(options).map(([key, optionText]) => (
              <li key={key}>{key + ') ' + optionText}</li>
            ))}
            {/* {Object.entries(options).map((option) => (
              <li key={options[0]}>{option[0] + ') ' + option[1]}</li>
            ))} */}
          </ul>
        </section>
        <hr className='custom-hr' />

        <div className='options'>
          <div className='left-options'>
            <i className='like-icon fa-regular fa-thumbs-up' />
            <i className='dislike-icon fa-regular fa-thumbs-up' />
          </div>
          <div className='right-options'>
            <i className='pencil-icon fa-solid fa-pencil' />
            <i className='trash-icon fa-solid fa-trash' />
          </div>
        </div>
      </div>
    </>
  );
}
