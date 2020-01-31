import React from "react";
import './calendar.css'
import { Inject, ScheduleComponent, Month,
    Day, Week, Agenda, ViewDirective, ViewsDirective,
    DragAndDrop} from "@syncfusion/ej2-react-schedule";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars'
import { L10n } from '@syncfusion/ej2-base'

L10n.load({
    'en-US': {
        'schedule':{
            'saveButton': 'EDIT',
            'cancelButton': 'DISCARD',
            'newEvent': ''
        }
    }
})

class Calendar extends React.Component{
   localData = [{
            id:1,
            EndTime: new Date(2020,0,2,6,30),
            StartTime: new Date(2020,0,2,4,0),
            Subject: 'Event name',
            IsAllDay: true,
            PrimaryColor: 'red'
        },{
            id:2,
            EndTime: new Date(2020,0,4,6,30),
            StartTime: new Date(2020,0,4,4,0),
            Subject: 'Event name',
            IsAllDay: true
        },
            {
                id:3,
                EndTime: new Date(2020,0,5,6,30),
                StartTime: new Date(2020,0,5,4,0),
                Subject: 'Event name',
                IsAllDay: true
            },
            {
                id:4,
                EndTime: new Date(2020,0,5,9,30),
                StartTime: new Date(2020,0,5,7,0),
                Subject: 'Event name',
                IsAllDay: true,
                PrimaryColor: 'green'
            },
            {
                id:5,
                EndTime: new Date(2020,0,14,9,30),
                StartTime: new Date(2020,0,14,7,0),
                Subject: 'Event name',
                IsAllDay: true
            },
            {
                id:6,
                EndTime: new Date(2020,0,20,9,30),
                StartTime: new Date(2020,0,20,7,0),
                Subject: 'Event name',
                IsAllDay: true,
                PrimaryColor: 'grey'
            },{
                id:7,
                EndTime: new Date(2020,0,28,9,30),
                StartTime: new Date(2020,0,28,7,0),
                Subject: 'Event name',
                IsAllDay: true
            },{
                id:8,
                EndTime: new Date(2020,0,29,9,30),
                StartTime: new Date(2020,0,29,7,0),
                Subject: 'Event name',
                IsAllDay: true
            }];
    eventTemplate (props) {
        return(
            <div className='template-wrap' style={{background: props.PrimaryColor,
                width: '100%', borderRadius: '4px' }}>{props.Subject}</div>
        )
    }
    editorWindowTemplate (props) {
       return(
           <table className='custom-event-editor'>
               <tbody style={{width: '100px'}}>
               <tr>
                   <td><input id="Text" className='e-field e-input' name="Subject"
                              placeholder='Text' type='text' style={{width: '460px'}}/></td>
               </tr>
               <tr>
                   <td>
                       <DropDownListComponent className='e-field' id='EventType' style={{width: '100%'}} dataSource={['red', 'green', 'blue', 'grey']}
                       placeholder='Choose Color' data-name='PrimaryColor' value={props.EventType || null}>

                       </DropDownListComponent>
                   </td>
               </tr>
               <tr>
                   <td>
                       <DateTimePickerComponent className='e-field' id='StartTime' data-name='StartTime'
                       value={new Date(props.startTime || props.StartTime)}/>
                   </td>
               </tr>
               <tr>
                   <td>
                       <DateTimePickerComponent className='e-field' id='EndTime' data-name='EndTime'
                                                value={new Date(props.endTime || props.EndTime)}/>
                   </td>
               </tr>
               </tbody>
           </table>
       )
    }
    render() {
        return (
            <div className='calendar-layout'>
                <div style={{display: 'flex', justifyContent:'center'}}>
                <div style={{width: '90%',display: 'flex',flexDirection: 'column',
                    alignItems: 'flex-start'}}>
                    <p className='calendar-name'>Calendar</p>
                <ScheduleComponent currentView='Month' cssClass='true' eventSettings={{
                    dataSource: this.localData, template: this.eventTemplate,
                }} editorTemplate={this.editorWindowTemplate.bind(this)}>
                    <ViewsDirective>
                        <ViewDirective option='Month'/>
                        <ViewDirective option='Week'/>
                        <ViewDirective option='Day'/>
                        <ViewDirective option='Agenda'/>
                    </ViewsDirective>
                    <Inject services={[Month, Day, Week,Agenda, DragAndDrop]}/>
                </ScheduleComponent>
                </div>
                </div>
            </div>
        )
    }
}
export default Calendar;