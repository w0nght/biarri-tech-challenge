import React, { Component } from 'react';
import employeeData from './data/employees';
import roleData from './data/roles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { TextField } from '@material-ui/core';

//TODO: change list background color according to object

class SearchableList extends Component {
  constructor() {
    super();
    this.state = {
      employeeData: [...employeeData],
      roleData: [...roleData],
      formattedData: [],
      filterData: "",
    }

    // Loop through the list of employees & roles
    for (let i = 0; i < this.state.employeeData.length; i++) {
      for (let p = 0; p < this.state.roleData.length; p++) {
        if (this.state.employeeData[i].roleId === this.state.roleData[p].id) {
          // var idString = this.state.employeeData[i].id.map(String);
          this.state.formattedData.push({
            "firstName": this.state.employeeData[i].firstName,
            "lastName": this.state.employeeData[i].lastName,
            "id": this.state.employeeData[i].id,
            "roleId": this.state.employeeData[i].roleId,
            "roleName": this.state.roleData[p].name,
            "backgroundColour": this.state.roleData[p].backgroundColour,
            "textColour": this.state.roleData[p].textColour
          })
        }
      }
    }

    // Sort by the role then employee name
    if (this.state.formattedData.length !== 0) {
      this.state.formattedData.sort(function(a, b) {
        return a.roleId - b.roleId || a.lastName.localeCompare(b.lastName);
      }) 
    }
    console.log(this.state.formattedData);
  }

  render() {
    let {formattedData, filterData} = this.state;
    let employeesList = "";

    if (filterData !== "") {
      employeesList = formattedData
      .filter(item => {
        return item.lastName.toLowerCase().includes(filterData.toLowerCase()) ||
               item.firstName.toLowerCase().includes(filterData.toLowerCase()) ||
               item.roleName.toLowerCase().includes(filterData.toLowerCase())
              //  Number.parseInt(item.id.includes(filterData))
      }).map((item, i) => {
        return (<ListItem 
          style={{backgroundColor: item.backgroundColour, paddingLeft: "66px", paddingRight: "66px"}}
        ><ListItemText primary={item.firstName + " " +item.lastName} secondary={item.roleName + " ID:" + item.id}/></ListItem>)
      })
    } else {
      employeesList = formattedData
      .map((item, i) => {
        return (<ListItem 
                  style={{backgroundColor: item.backgroundColour, paddingLeft: "66px", paddingRight: "66px"}}
        ><ListItemText primary={item.firstName + " " +item.lastName} secondary={item.roleName + " ID:" + item.id}/></ListItem>)
      })
    } 
    return(
      <div>
        <TextField 
          placeholder="Search here..."
          value={this.state.filterData}
          onChange={(e)=>this.setState({ filterData:e.target.value })}
          style={{paddingLeft: "50px"}}
        />
        <List>
          {employeesList}
        </List>
      </div>
    )
  }
}

export default SearchableList;