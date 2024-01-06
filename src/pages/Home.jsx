import { useState } from 'react';

export default function Home() {
    const [answer, setAnser] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status == 'success') {
        return <h1>정답입니다!</h1>;
    }

    function submitForm(answer) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let shouldError = answer.toLowerCase() !== 'ronaldo';
                if (shouldError) {
                    reject(
                        new Error('Good guess but a wrong answer. Try again!')
                    );
                } else {
                    resolve();
                }
            }, 1500);
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextChange(e) {
        setAnser(e.target.value);
    }

    return (
        <>
            <h2>Soccer Quiz</h2>
            <p>Who is the best soccer player in the world?</p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    onChange={handleTextChange}
                    disabled={status === 'submitting'}
                ></textarea>
                <br />
                <button
                    disabled={answer.length === 0 || status === 'submitting'}
                >
                    Submit
                </button>
                {error !== null && <p className='Error'>{error.message}</p>}
            </form>
        </>
    );
}
