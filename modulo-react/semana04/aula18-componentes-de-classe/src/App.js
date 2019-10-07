import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Post } from './components/Post/Post';

function App() {
  return (
    <div className="App">
      <Post 
        image={require('./img/img1.jpeg')}
        profilePicture={'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/240c7964-04e8-45d9-91e6-0ebec17987b8/headf4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45ML7TYGFO%2F20191001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20191001T223033Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDegjkqLFMuudhpECMGbbH9EpNbMn6jjNlJlrGcs2r%2F0AiBaeA9G3iTImXpjJiNxefMnMg5mnjOYSsKZivENEMz%2FpyrjAwjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDI3NDU2NzE0OTM3MCIMHm0fYC55xCvtnSrPKrcDY8gdAJcbWYmDsC8ZvBKWqdZR%2BaeesZzV%2FO8x%2BeMyMtrlsHcVr4Njzzmyhy97E8HMuUnpq3fRq2o6KQXHJrsdafXazOC2DUfiAeb5ZeKhsgeUne0wrwTdtGs7XoBx2d3gmzW4i6QcLlwEcIQFfuFGlKm3Ge1cpG1BZFp0d8mJFilDQdCInPkKiAXrOk9vlVTngUgEwx0jhJgTujDpYAgwqWnW1cET34aqHHUX0q4i8C1LuWS8Dd%2FJa2dzgMb5oCkOZ8i77NHT5t%2F7Iz4YlIZgF2WhniLU2IjlvOgefK4PI5j59AwjPyCziXwFYQGPm9EWOIKD76NAG%2BteuKCuClJ2rm%2FXQHzZ3PwEBHdoXqI6NbyG2aoCRMpr50RBDu1gOLjKqmTPQJkI0Gh%2FNlyzSLj4pojeINT2BHWi3lCRBdgNlWVetwi9nsn2m3tpcHPFK57cv8VJzsNgnBeYaCtDFeV2zAsmPx5idg6PnCMkD2b29zr4%2BXkD1D5qtj4cnLZtlEZ4RZdVYDD2jwFYg%2FBJ0jtzpYtcH9y0aU2ekfUzEtf7%2BGeQVuevGh6RzkRxoeIQSdENEvW7PbOG7DCLm87sBTq1AT5ppFB2at60tMqcGyR5lc9JC%2BwFn7E9qusLMULQsMWgFr2QDDDaOcB6ZO%2Bgp4TYRf6O27Kkwb%2B8T6wOzLsMmnJRcYpa296mtItgHbJc7DuL1EkXQLKeqFKfWnpxn%2Fgq2zSrrzLAVl4XVPF0EjSmJTAorpsE2UrYgsM47tuimsuvOraF6xHGD5F04efzQ9m8tiCWjlofXKw0Xer%2B7mcS63aqdZIQbMZlkNKyUwgGyx66uf6Rx2A%3D&X-Amz-Signature=0730d8559338717b32245022d01712823c62848a304f757ae37193a0de0bd536&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22headf4.png%22'}
        username={'future4.br'}
      />
      <Post 
        image={require('./img/img2.jpeg')}
        profilePicture={'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/240c7964-04e8-45d9-91e6-0ebec17987b8/headf4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45ML7TYGFO%2F20191001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20191001T223033Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDegjkqLFMuudhpECMGbbH9EpNbMn6jjNlJlrGcs2r%2F0AiBaeA9G3iTImXpjJiNxefMnMg5mnjOYSsKZivENEMz%2FpyrjAwjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDI3NDU2NzE0OTM3MCIMHm0fYC55xCvtnSrPKrcDY8gdAJcbWYmDsC8ZvBKWqdZR%2BaeesZzV%2FO8x%2BeMyMtrlsHcVr4Njzzmyhy97E8HMuUnpq3fRq2o6KQXHJrsdafXazOC2DUfiAeb5ZeKhsgeUne0wrwTdtGs7XoBx2d3gmzW4i6QcLlwEcIQFfuFGlKm3Ge1cpG1BZFp0d8mJFilDQdCInPkKiAXrOk9vlVTngUgEwx0jhJgTujDpYAgwqWnW1cET34aqHHUX0q4i8C1LuWS8Dd%2FJa2dzgMb5oCkOZ8i77NHT5t%2F7Iz4YlIZgF2WhniLU2IjlvOgefK4PI5j59AwjPyCziXwFYQGPm9EWOIKD76NAG%2BteuKCuClJ2rm%2FXQHzZ3PwEBHdoXqI6NbyG2aoCRMpr50RBDu1gOLjKqmTPQJkI0Gh%2FNlyzSLj4pojeINT2BHWi3lCRBdgNlWVetwi9nsn2m3tpcHPFK57cv8VJzsNgnBeYaCtDFeV2zAsmPx5idg6PnCMkD2b29zr4%2BXkD1D5qtj4cnLZtlEZ4RZdVYDD2jwFYg%2FBJ0jtzpYtcH9y0aU2ekfUzEtf7%2BGeQVuevGh6RzkRxoeIQSdENEvW7PbOG7DCLm87sBTq1AT5ppFB2at60tMqcGyR5lc9JC%2BwFn7E9qusLMULQsMWgFr2QDDDaOcB6ZO%2Bgp4TYRf6O27Kkwb%2B8T6wOzLsMmnJRcYpa296mtItgHbJc7DuL1EkXQLKeqFKfWnpxn%2Fgq2zSrrzLAVl4XVPF0EjSmJTAorpsE2UrYgsM47tuimsuvOraF6xHGD5F04efzQ9m8tiCWjlofXKw0Xer%2B7mcS63aqdZIQbMZlkNKyUwgGyx66uf6Rx2A%3D&X-Amz-Signature=0730d8559338717b32245022d01712823c62848a304f757ae37193a0de0bd536&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22headf4.png%22'}
        username={'future4.br'}
      />
      <Post 
        image={require('./img/img3.jpeg')}
        profilePicture={'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/240c7964-04e8-45d9-91e6-0ebec17987b8/headf4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45ML7TYGFO%2F20191001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20191001T223033Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDegjkqLFMuudhpECMGbbH9EpNbMn6jjNlJlrGcs2r%2F0AiBaeA9G3iTImXpjJiNxefMnMg5mnjOYSsKZivENEMz%2FpyrjAwjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDI3NDU2NzE0OTM3MCIMHm0fYC55xCvtnSrPKrcDY8gdAJcbWYmDsC8ZvBKWqdZR%2BaeesZzV%2FO8x%2BeMyMtrlsHcVr4Njzzmyhy97E8HMuUnpq3fRq2o6KQXHJrsdafXazOC2DUfiAeb5ZeKhsgeUne0wrwTdtGs7XoBx2d3gmzW4i6QcLlwEcIQFfuFGlKm3Ge1cpG1BZFp0d8mJFilDQdCInPkKiAXrOk9vlVTngUgEwx0jhJgTujDpYAgwqWnW1cET34aqHHUX0q4i8C1LuWS8Dd%2FJa2dzgMb5oCkOZ8i77NHT5t%2F7Iz4YlIZgF2WhniLU2IjlvOgefK4PI5j59AwjPyCziXwFYQGPm9EWOIKD76NAG%2BteuKCuClJ2rm%2FXQHzZ3PwEBHdoXqI6NbyG2aoCRMpr50RBDu1gOLjKqmTPQJkI0Gh%2FNlyzSLj4pojeINT2BHWi3lCRBdgNlWVetwi9nsn2m3tpcHPFK57cv8VJzsNgnBeYaCtDFeV2zAsmPx5idg6PnCMkD2b29zr4%2BXkD1D5qtj4cnLZtlEZ4RZdVYDD2jwFYg%2FBJ0jtzpYtcH9y0aU2ekfUzEtf7%2BGeQVuevGh6RzkRxoeIQSdENEvW7PbOG7DCLm87sBTq1AT5ppFB2at60tMqcGyR5lc9JC%2BwFn7E9qusLMULQsMWgFr2QDDDaOcB6ZO%2Bgp4TYRf6O27Kkwb%2B8T6wOzLsMmnJRcYpa296mtItgHbJc7DuL1EkXQLKeqFKfWnpxn%2Fgq2zSrrzLAVl4XVPF0EjSmJTAorpsE2UrYgsM47tuimsuvOraF6xHGD5F04efzQ9m8tiCWjlofXKw0Xer%2B7mcS63aqdZIQbMZlkNKyUwgGyx66uf6Rx2A%3D&X-Amz-Signature=0730d8559338717b32245022d01712823c62848a304f757ae37193a0de0bd536&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22headf4.png%22'}
        username={'future4.br'}
      />
    </div>
  );
}

export default App;
