__all__ = ['App' ]

import tacticenv

from pyasm.common import Common, Environment, Xml
from pyasm.web import DivWdg, Canvas, HtmlElement
from pyasm.biz import Project
from pyasm.security import Sudo, LoginGroup
from pyasm.search import Search, SearchType
from pyasm.command import Command


from tactic.ui.common import BaseRefreshWdg

#from .base_react_wdg import BaseReactWdg
from tactic.ui.tools import BaseReactWdg

import os
import json
from dateutil import parser, rrule
from datetime import datetime, timedelta


class App(BaseReactWdg):

    def get_display(self):

        top = DivWdg()
        self.set_as_panel(top)

        inner = DivWdg()
        top.add(inner)
        inner.add_style("width: 100%")


        dirname = os.path.dirname(__file__)


        jsx_path = "%s/redux/store.jsx" % dirname
        self.init_react(inner, jsx_path)

        jsx_path = "%s/app/app_bar.jsx" % dirname
        self.init_react(inner, jsx_path)


        """ 
        jsx_path = "%s/data_grid.jsx" % dirname
        self.init_react(inner, jsx_path)

        jsx_path = "%s/chart.jsx" % dirname
        self.init_react(inner, jsx_path)
        """

        jsx_path = "%s/app.jsx" % dirname
        self.init_react(inner, jsx_path)


        styles = self.get_styles()
        inner.add(styles)


        props = {}


        content = self.get_react_wdg("App", props)
        inner.add(content)



        if self.kwargs.get("is_refresh"):
            return inner
        else:
            return top


    def get_styles(self):
        return HtmlElement.style('''
        .resource-left {
            margin: 30px;
            width: 150px;
        }

        .resource-right {
            margin: 30px;
            width: 150px;
        }


        .resource-cell {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 0px;
            margin: 0px;
            padding: 0px;
            overflow: hidden;
        }

        .resource-cell .resource-cell-inner {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;
        }


        .resource-contract-limit {
            background-image: linear-gradient(45deg, #ffffff 25%, #eeeeee 25%, #eeeeee 50%, #ffffff 50%, #ffffff 75%, #eeeeee 75%, #eeeeee 100%);
            background-size: 8px 8px;
            font-weight: 500;
            font-size: 1.1rem;
        }




        div.ag-theme-alpine div.ag-row {
            font-size: 0.75rem;
        }

        div.ag-theme-alpine .grid-date-header {
            font-size: 10px !important;
            padding: 3px !important;
            border-right: solid 1px #DDD;
        }

        div.ag-theme-alpine .grid-date-header .ag-header-cell-text {
            margin: 0px auto;
        }

        div.ag-theme-alpine .ag-paging-panel {
            height: 30px;
        }

        .spt_modal {
          position: absolute;
          transform: translate(-50%, -50%);
          top: 50vh;
          left: 50vw;
          box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
          background: #FFF;
          overflow: auto;
        }



        /* for the timesheet */
        .spt_timesheet div.ag-theme-alpine .ag-text-field-input {
            text-align: center;
            font-size: 1.1rem;
        }

        ''')




    def get_onload_jsx(self):
        base, ext = os.path.splitext(__file__)
        jsx_path = "%s.jsx" % base
        f = open(jsx_path, "r")
        jsx = f.read()
        f.close()

        return jsx





