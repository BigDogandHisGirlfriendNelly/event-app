import React from 'react';
import { Column } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import LogoComponent from './LogoComponent';
import MenuItemComponent from '../sidebar/MenusItemComponent';
import IconOverview from '../../assets/icon-overview.js';
import IconIdeas from '../../assets/icon-ideas.js';
import IconContacts from '../../assets/icon-contacts';
import IconAgents from '../../assets/icon-agents';
import IconArticles from '../../assets/icon-articles';


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#363740',
        width: 255,
        paddingTop: 32
    },
    menuItemList: {
        marginTop: 52
        
    },
    separator: {
        borderTop: '1px solid #DFE0EB',
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    }
});

function SidebarComponent(props) {
    return (
        <Column className={css(styles.container)}>
            <LogoComponent />
            <Column className={css(styles.menuItemList)}>
                <div>
                <MenuItemComponent
                    title="Create Event" icon={IconOverview}
                    onClick={() => props.onChange('Create Event')}
                    active={props.selectedItem === 'Create Event'}
                   
                />
                 <button type="button">Click</button>
                </div>
                <MenuItemComponent
                    title="Details" icon={IconIdeas}
                    onClick={() => props.onChange('Details')}
                    active={props.selectedItem === 'Details'} />
                <MenuItemComponent
                    title="Attendes" icon={IconContacts}
                    onClick={() => props.onChange('Attendes')}
                    active={props.selectedItem === 'Attendes'} />
                <MenuItemComponent
                    title="Agents" icon={IconAgents}
                    onClick={() => props.onChange('Agents')}
                    active={props.selectedItem === 'Agents'} />
                <MenuItemComponent
                    title="Articles" icon={IconArticles}
                    onClick={() => props.onChange('Articles')}
                    active={props.selectedItem === 'Articles'} />
                <div className={css(styles.separator)}></div>
            </Column>
           
        </Column>
    );
}

export default SidebarComponent;