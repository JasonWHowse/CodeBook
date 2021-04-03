/*
 * Authored by: Jason Wesley Howse
 */

package helper_functions;

import java.lang.reflect.Array;
import java.util.Collection;

public class DeepClone{
    public static <E> E[][] deepCopy (E[][] original){
        E[][] copy= original.clone();
        for(int i=0;i<original.length;i++){
            copy[i]=original[i].clone();
        }//for(int i=0;i<original.length;i++){
        return copy;
    }//public static <E> E[][] deepCopy (E[][] original){

    public static <E> E[][][] deepCopy (E[][][] original){
        E[][][] copy= original.clone();
        for(int i=0;i<original.length;i++){
            copy[i]=deepCopy(original[i]).clone();
        }//for(int i=0;i<original.length;i++){
        return copy;
    }//public static <E> E[][][] deepCopy (E[][][] original){

    public static int[][] deepCopy (int[][] original){
        int[][] copy= original.clone();
        for(int i=0;i<original.length;i++){
            copy[i]=original[i].clone();
        }//for(int i=0;i<original.length;i++){
        return copy;
    }//public static int[][] deepCopy (int[][] original){

    public static int[][][] deepCopy (int[][][] original){
        int[][][] copy= original.clone();
        for(int i=0;i<original.length;i++){
            copy[i]=deepCopy(original[i]).clone();
        }//for(int i=0;i<original.length;i++){
        return copy;
    }//public static int[][][] deepCopy (int[][][] original){

    public static boolean[][] deepCopy (boolean[][] original){
        boolean[][] copy= original.clone();
        for(int i=0;i<original.length;i++){
            copy[i]=original[i].clone();
        }//for(int i=0;i<original.length;i++){
        return copy;
    }//public static boolean[][] deepCopy (boolean[][] original){

    public static boolean[][][] deepCopy (boolean[][][] original){
        boolean[][][] copy= original.clone();
        for(int i=0;i<original.length;i++){
            copy[i]=deepCopy(original[i]).clone();
        }//for(int i=0;i<original.length;i++){
        return copy;
    }//public static boolean[][][] deepCopy (boolean[][][] original){
  
  //any of the 3 dimension methods can be expanded by simply adding a new method with an additional dimension to the type, there must be type for each dimension smaller as well, a 5 dimension array would also need the 4 dimension added as well as containing the 3 and 2 dimension methods
  //new primitives can be added by copying the existing ones and changing the primitive array type 
}//public class DeepClone{
