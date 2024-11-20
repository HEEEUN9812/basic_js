/**
 * try ... catch
 * 
 * 1) 발생시킬때 -> 던진다 (throw)
 * 2) 명시적으로 인지 -> 잡는다 (catch)
 */

function runner(){
    try {
        console.log('hello')

    // throw new Error('문제 발생')

    console.log('world')
    } catch(e){
        console.log('-------catch-------')
        console.log(e)

    } finally {
        console.log('----finally-----')
    }
}
runner()