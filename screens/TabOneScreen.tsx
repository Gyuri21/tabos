
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet } from 'react-native';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const [employees,setEmployees] = useState([
    {id: 1,name: "Lakatos Lajos",city:"Szeged" },
    {id: 2,name: "Lakatos Brendon",city:"Győr"},
    {id: 3,name: "Cserepes Virág",city:"Város" },
    {id: 4,name: "Virágos András",city:"Lakhely" },
    {id: 5,name: "Varga László",city:"Budapest"},
  ]);

  const [projects,setProjects] = useState([
    {id: 1,title: "Triangel",employee_id:2 },
    {id: 2,title: "Pentagon",employee_id:3},
    {id: 3,title: "Dolgozók",employee_id:1},
    {id: 4,title: "Munkások",employee_id:2 },
    {id: 5,title: "Heloooo",employee_id:5},
  ]);
  const [actProject,setActProject] = useState([]);

  const onPressEmployeeItem = (item:any) => {
    let act:any = [];
    projects.forEach(project => {
      if(project.employee_id == item.id){
        act.push(project)
      }
    })
    setActProject(act);
    console.log(actProject)

  }
  const renderItem = ({item}:{item:any}) => (
    <View style={styles.employeeItem}>
      <Text style={styles.text} onPress={() => onPressEmployeeItem(item)}>{item.name}</Text>
    </View>
  );

  const renderProjectItem = ({item}:{item:any}) => (
    <View style={styles.employeeItem}>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dolgozók</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(0,0,0,1)" />
    <FlatList
    style={styles.employeeBox}
    data = {employees}
    renderItem = {renderItem}
    />
    <FlatList
      style={styles.employeeBox}
      data={actProject}
      renderItem={renderProjectItem}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  title: {
    marginTop: 15,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  },
  separator: {
    marginVertical: 10,
    height: 2,
    width: '80%',
    color: 'black'
  },
  employeeItem: {
    backgroundColor: 'skyblue',
    padding: 10,
    margin: 5,
    

  },
  employeeBox:{
    width: '100%',
    textAlign: 'center',
    margin: 5,
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  }
});
