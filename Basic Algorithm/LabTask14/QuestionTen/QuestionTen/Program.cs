using System;
using System.Security.Cryptography.X509Certificates;

namespace QuestionTen
{
    public delegate void Numbers();
    class Program
    {
        static void Main(string[] args)
        {
            Numbers number = () =>
            {
                int[] numbers = { 11, 2, 3, 4, 5, 6, 1 };
                int sum = 0;
                for (int i = 0; i < numbers.Length; i++)
                {
                    sum += numbers[i];                    
                };
                int result = sum / numbers.Length;
                Console.WriteLine(result);
            };            
            number();
        }

    }
}
