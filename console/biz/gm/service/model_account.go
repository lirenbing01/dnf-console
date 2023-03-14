package service

import (
	"console/biz/gm/model"
	"github.com/localhostjason/webserver/db"
	"gorm.io/gorm"
)

type AccountResult struct {
	model.Accounts
	Roles    int64 `json:"roles"`
	Money    int   `json:"money"`
	Capacity int   `json:"capacity"`

	CeraPoint int `json:"cera_point"` // d 点
	Cera      int `json:"cera"`       // d 币
}

type AccountFilter struct {
	Uid string `form:"uid"`
}

func (q AccountFilter) FilterQuery(dbx *gorm.DB) (tx *gorm.DB) {
	tx = dbx.Model(&model.Accounts{})

	if q.Uid != "" {
		tx = tx.Where("UID like ?", db.Like(q.Uid))
	}
	return
}

type RechargeReq struct {
	CeraPoint  int    `json:"cera_Point"`
	Cera       int    `json:"cera"`
	CeraOption string `json:"cera_Option" binding:"required,oneof=cera_point cera"`
}

type RoleResult struct {
	model.CharacInfo
	Money int `json:"money"`
}
