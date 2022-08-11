import { ScrollView, Text, View } from "react-native";
import { styles } from "./style";
import {AntDesign} from "@expo/vector-icons";

export default function main(){
return(
    <View style={styles.main}>

    

<View style={styles.conta}>
    <Text style={styles.txtconta}>
        Conta
    </Text>
    <AntDesign name="right" size={20} color="black"/>

</View>
    <Text style={styles.saldo}>
        R$ 250.450,34
    </Text>
    <ScrollView horizontal={true} style={styles.transacoes}>
        {/* PIX */}
        <View style={styles.transacao}>
            <AntDesign name="antdesign" size={20} color={"black"} style={styles.icontransacao}/>
            <Text>Pix</Text>
        </View>

        {/* Pagar */}
        <View style={styles.transacao}>
            <AntDesign name="barcode" size={20} color={"black"} style={styles.icontransacao}/>
            <Text>Pagar</Text>
        </View>

       {/* Pagar emprestando */}
       <View style={styles.transacao}>
            <AntDesign name="doubleright" size={20} color={"black"} style={styles.icontransacao}/>
            <Text>Emprestar</Text>
        </View>
       {/* Transferir */}

       <View style={styles.transacao}>
            <AntDesign name="upload" size={20} color={"black"} style={styles.icontransacao}/>
            <Text>Transferir</Text>
        </View>
       {/* Depositar */}

       <View style={styles.transacao}>
            <AntDesign name="download" size={20} color={"black"} style={styles.icontransacao}/>
            <Text>Depositar</Text>
        </View>
       {/* Recarga de celular  */}

       <View style={styles.transacao}>
            <AntDesign name="scan1" size={20} color={"black"} style={styles.icontransacao}/>
            <Text>Recarga celular</Text>
        </View>
       {/* Cobrar */}

       <View style={styles.transacao}>
            <AntDesign name="exception1" size={20} color={"black"} style={styles.icontransacao}/>
            <Text>Cobrar</Text>
        </View>
       {/* Doação */}

       <View style={styles.transacao}>
            <AntDesign name="downcircle" size={20} color={"black"} style={styles.icontransacao}/>
            <Text>Doar</Text>
        </View>

       {/* Transferir internac */}
       <View style={styles.transacao}>
            <AntDesign name="indent-right" size={20} color={"black"} style={styles.icontransacao}/>
            <Text>Transferir inter</Text>
        </View>
       {/* Investir */}

       <View style={styles.transacao}>
            <AntDesign name="rightsquare" size={20} color={"black"} style={styles.icontransacao}/>
            <Text>Investir</Text>
        </View>        
    </ScrollView>

    {/* Meus cartões */}
<View style={styles.meuscartoes}>
    <AntDesign name="creditcard" size={20} color={"black"} style={{paddingRight:10}}></AntDesign>
    <Text>Meus cartões</Text>
</View>
    <View style={{borderBottomColor:"black", borderWidth:0.4, marginTop: 15, borderColor:"#d3d3d3"}}>
    </View>
    {/* Area cartão */}
    
    <AntDesign name="creditcard" size={20} color={"black"} style={{paddingRight:10, marginTop: 20, marginBottom :15}}></AntDesign>



    {/*cartão  */}
    <View style={styles.conta}>
    <Text style={styles.txtconta}>
        Cartão de crédito
    </Text>
    <AntDesign name="right" size={20} color="black"/>

    </View>

<   Text style={{color:"silver", marginTop:15}}>Fatura atual</Text>

    <Text style={styles.saldo}>
        R$ 37,546,00
    </Text>

    <Text style={{color:"silver", marginTop:15}}>Limite disponível: 1.500.340.00</Text>
    <View style={{borderBottomColor:"black", borderWidth:0.4, marginTop: 15, borderColor:"#d3d3d3"}}/>
     

    {/* Emprestimo */}
    <AntDesign name="doubleright" size={20} color={"black"} style={{paddingRight:10, marginTop: 20, marginBottom :15}} />
    <View style={styles.conta}>
    <Text style={styles.txtconta}>
        Emprestimo
    </Text>
    <AntDesign name="right" size={20} color="black"/>

    </View>

<   Text style={{color:"silver", marginTop:15}}>Fatura atual</Text>

    <Text style={styles.saldo}>
        R$ 89,896,00
    </Text>

    <Text style={{color:"silver", marginTop:15}}>Limite disponível: 1.500.340.00</Text>
    <View style={{borderBottomColor:"black", borderWidth:0.4, marginTop: 15, borderColor:"#d3d3d3"}}/>





    <   Text style={{color:"silver", marginTop:15}}>Até R$ 7.577,50 disponível para você</Text>
    <View style={{borderBottomColor:"black", borderWidth:0.4, marginTop: 15, borderColor:"#d3d3d3"}}/>





    <AntDesign name="doubleright" size={20} color={"black"} style={{paddingRight:10, marginTop: 20, marginBottom :15}} />
    <View style={styles.conta}>
    <Text style={styles.txtconta}>
        Cartão de crédito
    </Text>
    <AntDesign name="right" size={20} color="black"/>

    </View>

<   Text style={{color:"silver", marginTop:15}}>Fatura atual</Text>



    <Text style={{color:"silver", marginTop:15}}></Text>

    <View style={{borderBottomColor:"black", borderWidth:0.4, marginTop: 15, borderColor:"#d3d3d3"}}/>

    <Text style={styles.saldo}>
        Seguro de Vida
    </Text>

    





    <   Text style={{color:"silver", marginTop:15}}>Até R$ 7.577,50 disponível para você</Text>
    <View style={{borderBottomColor:"black", borderWidth:0.4, marginTop: 15, borderColor:"#d3d3d3"}}/>


    <Text style={styles.saldo}>
        Descubra mais
    </Text>


    <ScrollView horizontal={true}>

        <View style={styles.descubra}>
            <Text style={{fontSize:15,fontWeight:"bold"}}>Convidar amigos</Text>

            <Text>

            Imagine um mundo diferente, onde o que importa são os seus valores, e não o valor na sua conta.
             O Nubank surgiu para construir este mundo com você, simplificando a sua
              vida financeira com transparência e segurança.

            </Text>
            <Text style={styles.btndescubra}>Convidar</Text>


            </View>


            <View style={styles.descubra}>
            <Text style={{fontSize:15,fontWeight:"bold"}}>Conta PJ</Text>

            <Text>

            Imagine um mundo diferente, onde o que importa são os seus valores,
             e não o valor na sua conta. O Nubank surgiu para construir este mundo com você,
              simplificando a sua vida financeira com transparência e segurança.

            </Text>
            <Text style={styles.btndescubra}>Saiba mais</Text>


            </View>






    </ScrollView>






    















    </View>



    )

}