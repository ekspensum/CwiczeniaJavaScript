using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace cwiczenia_asp
{
    public partial class _default : System.Web.UI.Page
    {
        private DateTime data;

        public _default()
        {
            data = new DateTime();
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            setDateToLabel();
            data = DateTime.Now;
            int godz = data.Hour - 2;
            labelLondyn.Text = data.Year + "-" +
                data.Month + "-" +
                data.Day + " " +
                godz + ":" +
                data.Minute + ":" +
                data.Second + ":" +
                data.Millisecond;
        }

        protected void Unnamed_Tick(object sender, EventArgs e)
        {
            setDateToLabel();
        }

        private void setDateToLabel()
        {
            data = DateTime.Now;
            label01.Text = data.Year + "-" +
                data.Month + "-" +
                data.Day + " " +
                data.Hour + ":" +
                data.Minute + ":" +
                data.Second + ":" +
                data.Millisecond;
        }

        protected void button01_Click1(object sender, EventArgs e)
        {
            label02.Text = "<br/>Inny text";
        }

        protected void Timer2_Tick(object sender, EventArgs e)
        {
            data = DateTime.Now;
            int godz = data.Hour - 2;
            labelLondyn.Text = data.Year + "-" +
                data.Month + "-" +
                data.Day + " " +
                godz + ":" +
                data.Minute + ":" +
                data.Second + ":" +
                data.Millisecond;
        }
    }
}