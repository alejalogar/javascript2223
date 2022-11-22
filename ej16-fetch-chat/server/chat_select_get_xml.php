<?php
$DEPURACION = false;
if ($DEPURACION) echo "<html><head></head><body>";
if(isset($_GET['ultimo'])) {
		$server = "mysql:dbname=chat";
		$user = "root";
		$pass = "";
		$con = new PDO($server,$user,$pass,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));

		// creamos el documento XML	
		$xml = new DOMDocument('1.0', 'UTF-8');
		$root = $xml->appendChild($xml->createElement("listado"));
		if (!$DEPURACION) header('Content-type: text/xml');

		$consulta = "SELECT * FROM mensajes WHERE id > ".$_GET['ultimo'];
		$sen = $con->prepare($consulta);
		$sen->execute();
		
		while($row = $sen->fetch(PDO::FETCH_NAMED)){
			$node = $xml->createElement("mensaje");
			$fila = $root->appendChild($node);
			foreach ($row as $columna => $valor) {
				$node = $xml->createElement($columna,$valor);
				$newnode = $fila->appendChild($node);
			}
		}
		if ($DEPURACION) echo "<h1>Resultados de la consulta</h1>";
		if ($DEPURACION) echo $consulta;
		if ($DEPURACION) echo "<h1>XML generado</h1>";
		echo $xml->saveXML();
} else {
	echo "No has pasado los parámetros correctos. Debes pasar 'ultimo'";
}
if ($DEPURACION) echo "</body></html>";
?>
