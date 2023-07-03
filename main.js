<input type="button" value="Cerrar esta
ventana" onclick="window.close();"></input>


function PedirConfirmacion()
{
 var agree;
 agree=confirm("Enviar ahora?");
if (agree) {
//code to check data goes here
return true;
} else {
 return false ;
}
} 