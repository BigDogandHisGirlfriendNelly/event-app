import React from 'react';

import { Column, Row } from 'simple-flexbox';
import SidebarComponent from './Components/sidebar/SideBarComponent';
import HeaderComponent from './Components/header/headerComponent';
import './App.css';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    container: {
        height: '100vh'
    },
    content: {
        marginTop: 54
    },
    mainBlock: {
        backgroundColor: '#F7F8FC',
        padding: 30
    }
});




class App extends React.Component {

    state = { selectedItem: 'Create Event' };

    render() {
        const { selectedItem } = this.state;
        return (
            <Row className={css(styles.container)}>
                <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                    <HeaderComponent title={selectedItem} />
                    <div className={css(styles.content)}>
                        <span>Content</span>
                    </div>
                </Column>
            </Row>
            
        );
    }
}

export default App;