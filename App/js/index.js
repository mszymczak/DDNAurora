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
                        "id" : "b",
                        "caption" : "Forward Sizing"
                    }
                ])
                .setDock("none")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("53.02857142857143em")
                .setHeight("53.79047619047619em")
                .setValue("b")
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label27")
                .setLeft("1.5238095238095237em")
                .setTop("30.4em")
                .setWidth("8.838095238095239em")
                .setCaption("Usable Capacity")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label28")
                .setLeft("10.666666666666666em")
                .setTop("30.4em")
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
                .setTop("32.68571428571428em")
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
                .setLeft("1.5238095238095237em")
                .setTop("32.68571428571428em")
                .setWidth("8.838095238095239em")
                .setCaption("Effective Capacity")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label32")
                .setLeft("1.5238095238095237em")
                .setTop("28.114285714285714em")
                .setWidth("8.838095238095239em")
                .setCaption("Raw Capacity")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label33")
                .setLeft("10.666666666666666em")
                .setTop("28.114285714285714em")
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
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox8")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "Full (12)",
                        "imageClass" : "xui-icon-number1"
                    },
                    {
                        "id" : "b",
                        "caption" : "Partial (6)",
                        "imageClass" : "xui-icon-number2"
                    }
                ])
                .setLeft("1.5238em")
                .setTop("10.59047619047619em")
                .setWidth("15.314285714285715em")
                .setHeight("6.628571428571429em")
                .setLabelSize("1.5em")
                .setLabelPos("top")
                .setLabelCaption("Node Drive Device Population")
                .setLabelHAlign("left")
                .setValue("a"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label43")
                .setLeft("21.333333333333332em")
                .setTop("28.114285714285714em")
                .setWidth("10.361904761904762em")
                .setCaption("TB")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label44")
                .setLeft("21.333333333333332em")
                .setTop("30.4em")
                .setWidth("10.361904761904762em")
                .setCaption("TB")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label45")
                .setLeft("21.333333333333332em")
                .setTop("32.68571428571428em")
                .setWidth("10.361904761904762em")
                .setCaption("TB")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label57")
                .setLeft("1.5238095238095237em")
                .setTop("25.82857142857143em")
                .setWidth("45.02857142857143em")
                .setCaption("Approximate Capacity")
                .setHAlign("left")
                .setFontColor("#FFFFFF")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#4169E1",
                        "padding" : "0px 0px 0px 20px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox10")
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
                .setLeft("1.5238095238095237em")
                .setTop("17.447619047619046em")
                .setWidth("15.314285714285715em")
                .setHeight("6.628571428571429em")
                .setLabelSize("1.5em")
                .setLabelPos("top")
                .setLabelCaption("Drive Device Type")
                .setLabelHAlign("left")
                .setValue("a"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput211")
                .setLeft("2.5904761904761906em")
                .setTop("7.542857142857143em")
                .setType("counter")
                .setValue(6),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label58")
                .setLeft("9.904761904761905em")
                .setTop("20.495238095238093em")
                .setWidth("37.40952380952381em")
                .setCaption(" ")
                .setHAlign("left")
                .setFontColor("#FFFFFF")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#4169E1"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label59")
                .setLeft("1.5238095238095237em")
                .setTop("3.7333333333333334em")
                .setWidth("45.02857142857143em")
                .setCaption("DDN Aurora Appliance")
                .setHAlign("left")
                .setFontColor("#FFFFFF")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#4169E1",
                        "padding" : "0px 0px 0px 20px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label72")
                .setLeft("1.5238095238095237em")
                .setTop("6.019047619047619em")
                .setWidth("8.838095238095239em")
                .setCaption("Starling RS-7313")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label74")
                .setLeft("12.952380952380953em")
                .setTop("7.847619047619047em")
                .setWidth("10.361904761904762em")
                .setCaption("Qty (Min 6)")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label75")
                .setLeft("1.5238095238095237em")
                .setTop("36.49523809523809em")
                .setWidth("45.02857142857143em")
                .setCaption("Configuration")
                .setHAlign("left")
                .setFontColor("#FFFFFF")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#4169E1",
                        "padding" : "0px 0px 0px 20px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label76")
                .setLeft("1.5238095238095237em")
                .setTop("40.53333333333333em")
                .setWidth("9.219047619047618em")
                .setCaption("RS-7313")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#DCDCDC",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label79")
                .setLeft("1.5238095238095237em")
                .setTop("39.00952380952381em")
                .setWidth("10em")
                .setCaption("SKU")
                .setHAlign("center")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#87CEEB"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label80")
                .setLeft("22.857142857142858em")
                .setTop("39.00952380952381em")
                .setWidth("25.21904761904762em")
                .setCaption("Description")
                .setHAlign("center")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#87CEEB"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label81")
                .setLeft("12.19047619047619em")
                .setTop("39.00952380952381em")
                .setWidth("10em")
                .setCaption("Qty")
                .setHAlign("center")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#87CEEB"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label82")
                .setLeft("22.857142857142858em")
                .setTop("40.53333333333333em")
                .setWidth("24.457142857142856em")
                .setCaption("Starling")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#DCDCDC",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label83")
                .setLeft("12.19047619047619em")
                .setTop("40.53333333333333em")
                .setWidth("9.219047619047618em")
                .setCaption("-")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#DCDCDC",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
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