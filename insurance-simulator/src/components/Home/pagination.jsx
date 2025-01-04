import Introduction from './introduction';
import Sections from './sections';
import Footer from './footer';
import Improvements from './improvements'


function Pagination(){
    return(
            <div className="page-container">
                <div className="content">
                    
                        <Introduction /> 

                    <Sections /> 
                    <Improvements />
                </div>
                <Footer />
            </div>
    );
}

export default Pagination;