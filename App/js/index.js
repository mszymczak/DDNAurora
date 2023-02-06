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
                        "imageClass" : "xui-icon-xui"
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
                .setHeight("21.79047619047619em")
                .setValue("b")
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput117")
                .setLeft("1.5238095238095237em")
                .setTop("5.485714285714286em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Raw Capacity")
                .setType("number"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput118")
                .setLeft("1.5238095238095237em")
                .setTop("8.533333333333333em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Usable Capacity")
                .setType("number"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label23")
                .setLeft("2.2857142857142856em")
                .setTop("13.866666666666667em")
                .setCaption("Drive Devices"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label24")
                .setLeft("9.523809523809524em")
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