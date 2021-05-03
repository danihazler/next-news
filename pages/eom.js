import styles from '../styles/Eom.module.css';

export const EOM = ({employee}) => {
    return (
        <div className='page-container'>
            <main className={styles.main}>
                <h1>Employee of the Month</h1>
                <div className={styles.employee}>
                    <h3>{employee.name}</h3>
                    <h6>{employee.position}</h6>
                    <img src={employee.image} alt={`${employee.name} portrait`} />
                    <p>{employee.description}</p>
                </div>
            </main>
        </div>
    );
};

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(
        'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth',
    );

    const employee = await apiResponse.json();

    return {
        props: {
            employee
        }
    }
};

export default EOM;