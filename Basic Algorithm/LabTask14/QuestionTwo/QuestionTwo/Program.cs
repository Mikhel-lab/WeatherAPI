using System;

namespace QuestionTwo
{
    public delegate void Numbers();
    class Program
    {
        static void Main(string[] args)
        {
            Numbers addNum =  () =>
            {
                int sum = 0;
                for (int i = 0; i <= 255; i += 1)
                {
                    sum += i;
                    Console.WriteLine($"{sum} and {i}");
                };
            };
            addNum();
        }
    }
}
