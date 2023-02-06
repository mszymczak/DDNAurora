// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"xui_ui_tabs5")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "Forward Sizing",
                        "imageClass" : ""
                    },
                    {
                        "id" : "b",
                        "caption" : "Reverse Sizing"
                    }
                ])
                .setDock("none")
                .setLeft("3.8095238095238093em")
                .setTop("6.857142857142857em")
                .setWidth("53.02857142857143em")
                .setHeight("28.64761904761905em")
                .setValue("b")
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label27")
                .setLeft("-0.7619047619047619em")
                .setTop("13.866666666666667em")
                .setCaption("Usable Capacity")
                .setWidth("10.361904761904762em"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label28")
                .setLeft("10.666666666666666em")
                .setTop("13.866666666666667em")
                .setWidth("10em")
                .setCaption("0")
                .setHAlign("center")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#DCDCDC"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label29")
                .setLeft("10.666666666666666em")
                .setTop("16.152380952380952em")
                .setWidth("10em")
                .setCaption("0")
                .setHAlign("center")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#DCDCDC"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label31")
                .setLeft("-0.7619047619047619em")
                .setTop("16.152380952380952em")
                .setCaption("Effective Capacity")
                .setWidth("10.361904761904762em"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label32")
                .setLeft("-0.7619047619047619em")
                .setTop("11.58095238095238em")
                .setCaption("Raw Capacity")
                .setWidth("10.361904761904762em"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label33")
                .setLeft("10.666666666666666em")
                .setTop("11.58095238095238em")
                .setWidth("10em")
                .setCaption("0")
                .setHAlign("center")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#DCDCDC"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput133")
                .setLeft("2.6666666666666665em")
                .setTop("9.066666666666666em")
                .setWidth("17.904761904761905em")
                .setLabelSize("8em")
                .setLabelCaption("Drive Devices")
                .setType("number"),
                "b"
            );
            
            append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox4")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "QLC-E1.s-15360",
                        "imageClass" : "xui-icon-number1"
                    },
                    {
                        "id" : "b",
                        "caption" : "QLC-E1.s-30720",
                        "imageClass" : "xui-icon-number2"
                    }
                ])
                .setLeft("5.333333333333333em")
                .setTop("10.666666666666666em")
                .setWidth("15.314285714285715em")
                .setHeight("6.628571428571429em")
                .setLabelSize("1.5em")
                .setLabelPos("top")
                .setLabelCaption("Drive Device")
                .setLabelHAlign("left")
                .setValue("a")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});