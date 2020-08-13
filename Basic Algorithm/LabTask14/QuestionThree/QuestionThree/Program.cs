using System;

namespace QuestionThree
{
    public delegate void Numbers();
    class Program
    {
        static void Main(string[] args)
        {
            Numbers num = delegate ()
            {
                int[] numbers = { 45, 340, 23, 56, 32 };
                int max = numbers[0];
                for (int i = 0; i < numbers.Length; i++)
                {
                    if (numbers[i] > max)
                    {
                        max = numbers[i];
                    }
                };
                Console.WriteLine(max);
            };
            num();
        }
    }
}