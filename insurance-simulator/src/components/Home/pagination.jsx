import Introduction from './introduction';
import Sections from './sections';
import Footer from './footer';


function Pagination(){
    return(
            <div className="page-container">
                <div className="content">
                    
                        <Introduction /> 
              
                    <Sections /> 
                </div>
                <Footer />
            </div>
    );
}

export default Pagination;