/*
 * Authored by: Jason Wesley Howse
 */

package helper_functions;

public class DeepClone{   
    public static int[][] deepClone(int[][] original) {
        int[][] copy = original.clone();
        for (int i = 0; i < original.length; i++) {
            copy[i] = original[i].clone();
        }//for(int i=0;i<original.length;i++){
        return copy;
    }//public static int[][] deepClone (int[][] original){

    public static boolean[][] deepClone(boolean[][] original) {
        boolean[][] copy = original.clone();
        for (int i = 0; i < original.length; i++) {
            copy[i] = original[i].clone();
        }//for(int i=0;i<original.length;i++){
        return copy;
    }//public static boolean[][] deepClone (boolean[][] original){

    public static <E> E deepClone(E original) {
        E[] decon = (E[]) original;
        E[] copy = decon.clone();
        if (decon[0].getClass().isArray()) {
            for (int i = 0; i < decon.length; i++) {
                copy[i] = deepClone(decon[i]);
            }//for(int i=0;i<decon.length;i++){
        }//if(decon[0].getClass().isArray()){
        E recon = (E) copy;
        return recon;
    }//public static <E> E deepClone (E original){
  
  //the generic (non primitive) will except an array of any number of dimensions as long as it does not contain primitives as the array type (may contain primitives in cloned object)
  //new primitives can be added by copying the existing ones and changing the primitive array type 
}//public class DeepClone{
