using System;

namespace Question8
{
    public delegate void Numbers();
    class Program
    {
        static void Main(string[] args)
        {
            Numbers num = () =>
            {
                for (int i = 0; i < 255; i++)
                {
                    if(i % 2 != 0)
                    {
                        Console.WriteLine(i);
                    }
                };
            };
            num();
        }
    }
}
