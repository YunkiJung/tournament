import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Home(){
    const navigate = useNavigate();


    return(
        <Tabs
        defaultActiveKey="active-tournament"
        id="justify-tab-example"
        className="mb-3"
        justify
        >
            <Tab eventKey="active-tournament" title="Active Tournament">
                <div>active lists component area</div>
                <Button onClick={ () => { navigate('/activelist') } } variant="primary" type="submit">
                    Active Tournament List
                </Button>
            </Tab>
            <Tab eventKey="past-tournament" title="Past Tournament">
                <div>past lists component area</div>
                <Button onClick={ () => { navigate('/pastlist') } } variant="primary" type="submit">
                    Past Tournament List
                </Button>
            </Tab>
            <Tab eventKey="new-tournament" title="New Tournament">
                <div>create new component area</div>
                <Button onClick={ () => { navigate('/create') } } variant="primary" type="submit">
                    Create New Tournament
                </Button>
            </Tab>
        </Tabs>
    )
}

export default Home;