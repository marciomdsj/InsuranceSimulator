import { SubTitle, Title } from './styles';



function Introduction() {
    return (
        <>
            <Title>Welcome to Insurance Simulator builded by Me.</Title>
                <div className="introContainer">
                    <div className="helpText">
                        <div className="step">
                            <span className="circle">1</span>
                                <h3>Select the type of asset you want to insure.</h3>
                        </div>
                        <div className="step">
                            <span className="circle">2</span>
                                <h3>Select the brand and the model.</h3>
                        </div>
                        <div className="step">
                            <span className="circle">3</span>
                                <h3>System will calculate the estimated cost.</h3>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Introduction;