import {StyleSheet} from "react-native";
export const styles = StyleSheet.create({
    main:{
        flex:1,
        padding:10,
    },
    conta:{
        flexDirection:"row",
        justifyContent:"space-between"
        
    },
    txtconta:{
        fontSize:20,
    },
    saldo:{
        fontSize:30,
        fontWeight:"bold",
        paddingTop:15,
    },
    transacoes:{
        paddingLeft:10,
        paddingRight:10,
        flexDirection:"row",
        minHeight:150,
        
    },
    transacao:{
        justifyContent:"center",
        alignItems:"center",
        marginRight:10,
    },
    icontransacao:{
        padding:5,
        backgroundColor:"silver",
        borderRadius:100
    },
    meuscartoes:{
        flexDirection:"row",
        padding:10,
        backgroundColor:"silver",
        borderRadius:10
    }

})



