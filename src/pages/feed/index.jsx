import { Header } from "../../components/Header";
import {Container,Column,Title,TitleHighLight} from "./styles"
import {Card} from '../../components/Card'
import {UserInfo} from '../../components/UserInfo';


const Feed = () => {
    return (<>
        <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Column>
                <Column flex={1}>
                    <TitleHighLight># Ranking 5 top da semana</TitleHighLight>
                    <UserInfo percentual={80} name="Michael santos" image='https://avatars.githubusercontent.com/u/92458591?s=400&u=7a8be6729e8a819fbc338b34f9554209e9b1d24f&v=4'/>
                    <UserInfo percentual={50} name="Michael santos" image='https://avatars.githubusercontent.com/u/92458591?s=400&u=7a8be6729e8a819fbc338b34f9554209e9b1d24f&v=4'/>
                    <UserInfo percentual={20} name="Michael santos" image='https://avatars.githubusercontent.com/u/92458591?s=400&u=7a8be6729e8a819fbc338b34f9554209e9b1d24f&v=4'/>
                </Column>
                
                
            </Container>
            
       </>)
    
}

export {Feed};