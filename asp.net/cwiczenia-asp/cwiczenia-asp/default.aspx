<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="cwiczenia_asp._default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
        .styl1{
            background: yellow;
            font-size:25px;
        }
        .styl2{
            background: blue;
            font-size:30px;
            text-decoration-color:white;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
            <asp:Timer ID="Timer1" OnTick="Unnamed_Tick" runat="server" Interval="1000"></asp:Timer>
            <asp:Timer ID="Timer2" OnTick="Timer2_Tick" runat="server" Interval="1000"></asp:Timer>
            <asp:UpdatePanel runat="server">
                <Triggers>
                    <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                    <asp:AsyncPostBackTrigger ControlID="Timer2" EventName="Tick" />
                </Triggers>
                <ContentTemplate>
                    Czas Warszawa: <asp:Label ID="label01" runat="server" CssClass="styl1"></asp:Label>
                    <br />
                    London Time: <asp:Label ID="labelLondyn" runat="server" CssClass="styl2"></asp:Label>
                    <br />
                </ContentTemplate>
            </asp:UpdatePanel>
            <asp:Button runat="server" ID="button01" Text="OK" OnClick="button01_Click1" />

            <asp:Label ID="label02" runat="server" CssClass="styl2"></asp:Label>
        </div>
    </form>
</body>
</html>
