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
                .setLeft("1.5238095238095237em")
                .setTop("1.5238095238095237em")
                .setWidth("53.02857142857143em")
                .setHeight("42.36190476190476em")
                .setValue("b")
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label27")
                .setLeft("1.5238095238095237em")
                .setTop("24.304761904761904em")
                .setWidth("8.838095238095239em")
                .setCaption("Usable Capacity")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label28")
                .setLeft("10.666666666666666em")
                .setTop("24.304761904761904em")
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
                .setTop("26.590476190476192em")
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
                .setTop("26.590476190476192em")
                .setWidth("8.838095238095239em")
                .setCaption("Effective Capacity")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label32")
                .setLeft("1.5238095238095237em")
                .setTop("22.01904761904762em")
                .setWidth("8.838095238095239em")
                .setCaption("Raw Capacity")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label33")
                .setLeft("10.666666666666666em")
                .setTop("22.01904761904762em")
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
                .setTop("4.495238095238095em")
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
                .setTop("22.01904761904762em")
                .setWidth("10.361904761904762em")
                .setCaption("TB")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label44")
                .setLeft("21.333333333333332em")
                .setTop("24.304761904761904em")
                .setWidth("10.361904761904762em")
                .setCaption("TB")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label45")
                .setLeft("21.333333333333332em")
                .setTop("26.590476190476192em")
                .setWidth("10.361904761904762em")
                .setCaption("TB")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label57")
                .setLeft("1.5238095238095237em")
                .setTop("19.733333333333334em")
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
                .setTop("11.352380952380953em")
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
                .setLeft("22.857142857142858em")
                .setTop("6.247619047619048em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Counter")
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
                .setTop("2.4380952380952383em")
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