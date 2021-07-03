using src;
using System.Windows;
using System.Windows.Media;
using static src.Toaster;

namespace ToasterBuilder {
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window {
        private readonly Toaster toast1 = new Toaster();
        private readonly Toaster toast2 = new Toaster();
        private readonly Toaster toast3 = new Toaster();
        private readonly Toaster toast4 = new Toaster();
        private readonly Toaster toast5 = new Toaster();
        private readonly Toaster toast6 = new Toaster();
        public MainWindow() {
            InitializeComponent();
            MainGrid.Children.Add(toast1.GetToast());
            MainGrid.Children.Add(toast2.GetToast());
            MainGrid.Children.Add(toast3.GetToast());
            MainGrid.Children.Add(toast4.GetToast());
            MainGrid.Children.Add(toast5.GetToast());
            MainGrid.Children.Add(toast6.GetToast());
            toast2.SetBorderMargin(500.0, 0, 0, 10.0);
            toast3.SetBorderMargin(-500.0, 0, 0, 10.0);
            toast4.SetBorderMargin(0, 0, 0, 110.0);
            toast5.SetBorderMargin(500.0, 0, 0, 110.0);
            toast6.SetBorderMargin(-500.0, 0, 0, 110.0);
            toast4.SetPrimaryColors(Color.FromArgb(225, 0, 0, 125), Color.FromArgb(225, 0, 0, 255), Color.FromArgb(225, 0, 0, 255));
            toast5.SetWarningColors(Color.FromArgb(225, 125, 68, 0), Color.FromArgb(225, 255, 128, 0), Color.FromArgb(225, 255, 128, 0));
            toast6.SetErrorColors(Color.FromArgb(225, 0, 125, 125), Color.FromArgb(225, 0, 255, 255), Color.FromArgb(225, 0, 255, 255));
        }

        private void Button_Click(object sender, RoutedEventArgs e) {
            toast1.PopToastie("Toast 1", ToastColors.PRIMARY, 4);
            toast2.PopToastie("Toast 2", ToastColors.WARNING, 6);
            toast3.PopToastie("Toast 3", ToastColors.ERROR, 2);
            toast4.PopToastie("Toast 4", ToastColors.PRIMARY, 10);
            toast5.PopToastie("Toast 5", ToastColors.WARNING, 12);
            toast6.PopToastie("Toast 6", ToastColors.ERROR, 8);
        }
    }
}
