import PersonDetails from './components/personDetails';

function Profil (props){
    const allPersonDetails = props.list.map(person => <PersonDetails personData={person} />)
        return (
        <div>
     {allPersonDetails}
        </div>
    )
}

export default Profil;