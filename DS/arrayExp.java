// Given two numbers  and .  indicates the number of elements in the array  and  indicates number of queries. You need to perform two types of queries on the array .

// You are given  queries. Queries can be of two types, type 1 and type 2.

// Type 1 queries are represented as 1 i j : Modify the given array by removing elements from  to  and adding them to the front.

// Type 2 queries are represented as 2 i j : Modify the given array by removing elements from  to  and adding them to the back.

// Your task is to simply print  of the resulting array after the execution of  queries followed by the resulting array.

// Note While adding at back or front the order of elements is preserved.

//input
// 8 4
// 1 2 3 4 5 6 7 8
// 1 2 4
// 2 3 5
// 1 4 7
// 2 1 4

//output
1
2 3 6 5 7 8 4 1


import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner s=new Scanner(System.in);
        int n=s.nextInt();
        int m=s.nextInt();
        int arr[]=new int[n];
        for(int i=0;i<n;i++){
            arr[i]=s.nextInt();
        }
        for(int k=0;k<m;k++){
            if(s.nextInt()==1){
                int i=s.nextInt();
                int j=s.nextInt();
                for(int e=i-2;e>=0;e--){
                    for(int t=e;t<e+(j-i+1);t++){
                        int temp=arr[t];
                        arr[t]=arr[t+1];
                        arr[t+1]=temp;
                    }
                }
            }
            else{
                int i=s.nextInt();
                int j=s.nextInt();
                for(int e=j;e<n;e++){
                    for(int t=e;t>e-(j-i+1);t--){
                        int temp=arr[t-1];
                        arr[t-1]=arr[t];
                        arr[t]=temp;
                    }
                }
            }
            // System.out.println(Arrays.toString(arr));
        }
        System.out.println(Math.abs(arr[0]-arr[n-1]));
        for(int val:arr){
            System.out.print(val+" ");
        }
    }
}