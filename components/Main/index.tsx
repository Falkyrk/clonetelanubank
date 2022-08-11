import { ScrollView, Text, View } from "react-native";
import {styles} from "./style";
import {AntDesign} from "@expo/vector-icons";

export default function Main(){
    return(
        <View style={styles.main}>
         <View style={styles.conta}>
            <Text style={styles.txtconta}>
                Conta
            </Text>
            <AntDesign name="right" size={20} color="black"/>

         </View>
         <Text style={styles.saldo}>
             R$ 2.360.56
             </Text>

             <ScrollView horizontal={true} style={styles.transacoes}>

                {/* PIX */}
                <View style={styles.transacao}>
                    <AntDesign name="antdesign" size={20} color="black" style={styles.icontransacao}/>
                    <Text>Pix</Text>
                </View>
                {/* Fim do Pix */}

               {/* boleto */}
               <View style={styles.transacao}>
                    <AntDesign name="barcode" size={20} color="black" style={styles.icontransacao}/>
                    <Text>Pagar</Text>
                    <Text>Boleto</Text>
                </View>
                {/* Fim do boleto */}

                                                {/* emprestar */}
                                                <View style={styles.transacao}>
                    <AntDesign name="doubleright" size={20} color="black" style={styles.icontransacao}/>
                    <Text>Emprestar</Text>
                </View>
                {/* Fim do emprestar */}

                                                {/* transferir */}
                                                <View style={styles.transacao}>
                    <AntDesign name="upload" size={20} color="black" style={styles.icontransacao}/>
                    <Text>Transferir</Text>
                </View>
                {/* Fim do transferir */}

                                                {/* depositar */}
                                                <View style={styles.transacao}>
                    <AntDesign name="arrowdown" size={20} color="black" style={styles.icontransacao}/>
                    <Text>Depositar</Text>
                </View>
                {/* Fim do depositar */}

                                                {/* recarga cel */}
                                                <View style={styles.transacao}>
                    <AntDesign name="phone" size={20} color="black" style={styles.icontransacao}/>
                    <Text>Recarga Cel</Text>
                </View>
                {/* Fim do recarga cel */}

                                                {/* cobrar */}
                                                <View style={styles.transacao}>
                    <AntDesign name="frown" size={20} color="black" style={styles.icontransacao}/>
                    <Text>Cobrar</Text>
                </View>
                {/* Fim do cobrar */}

                                                {/* doacao */}
                                                <View style={styles.transacao}>
                    <AntDesign name="team" size={20} color="black" style={styles.icontransacao}/>
                    <Text>Doacao</Text>
                </View>
                {/* Fim do doacao */}

                                                {/* transferencia */}
                                                <View style={styles.transacao}>
                    <AntDesign name="export" size={20} color="black" style={styles.icontransacao}/>
                    <Text>Transferencia</Text>
                    <Text>Internacional</Text>
                </View>
                {/* Fim do transferencia */}

                                                {/* investir */}
                                                <View style={styles.transacao}>
                    <AntDesign name="wallet" size={20} color="black" style={styles.icontransacao}/>
                    <Text>Investir</Text>
                </View>
                {/* Fim do investir */}

             </ScrollView>

             <View style={styles.meuscartoes}>
                 <AntDesign name="creditcard" size={20} color="black" style={{paddingRight:10}}/> 
                 <Text>Meus cartões</Text>
             </View>
             <View style={{borderBottomColor:"silver", borderWidth:0.2, marginTop:30}}/>






        </View>
    )
}
    
