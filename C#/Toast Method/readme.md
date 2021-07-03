<h2>Toast API for WPF</h2>

Generally to use this use the Toaster.cs class:<br>
create a new Toaster object as a field in the form you want to use it in<br>
add the toast form object to the object you want to call it in, for example using MainGrid, the name of the primary grid.<br>
use the Children.Add( method to add the toast object using the GetToast method from the toast object.<br>
MainGrid.Children.Add(toast.GetThost());<br>
Attributes of the toast object have default values the object is instantiated with but most can be modified to customize the toast.<br>
to call hte toast use the PopToastie method on the object.<br>
You will need to include a message, the toast color schema, and the duration in seconds for which you wish to call it.<br>
for example:<br>
toast.PopToastie("Toast message", ToastColors.PRIMARY, 4);<br>
